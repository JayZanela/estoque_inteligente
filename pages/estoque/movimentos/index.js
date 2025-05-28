// pages/movimentos/index.js
import { useState, useEffect } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import { opcoesMovimentosEstoque } from "../../../lib/data/optionsMovimentosEstoque";
import { useRouter } from "next/router";

// imports dinâmicos dos formulários
const FormEntrada = dynamic(
  () =>
    import("../../../pages/components/cadastro_entrada_estoque").then(
      (m) => m.default
    ),
  { ssr: false }
);
/*
const FormSaida = dynamic(
  () =>
    import("../../../pages/components/cadastro_saida_estoque").then(
      (m) => m.default
    ),
  { ssr: false }
);
const FormTransferencia = dynamic(
  () =>
    import("../../../pages/components/cadastro_transferencia_estoque").then(
      (m) => m.default
    ),
  { ssr: false }
);*/

export default function Movimentos() {
  const router = useRouter();
  const [selecionado, setSelecionado] = useState(null);
  const [manualId, setManualId] = useState("");
  const [erroEndereco, setErroEndereco] = useState(false);
  const [erroOcupacao, setErroOcupacao] = useState(false);
  const [dadosEndereco, setDadosEndereco] = useState(null);
  const [produtosOcupacao, setProdutosOcupacao] = useState([]);

  // Pre-seleção via query param
  useEffect(() => {
    if (!router.isReady) return;
    const { id_endereco } = router.query;
    if (id_endereco) {
      setManualId(id_endereco.toString());
    }
  }, [router.isReady, router.query]);

  // Busca endereço e produtos na ocupação
  const handleManualSelect = async () => {
    try {
      // 1) Busca dados da ocupação
      const resEnd = await fetch("/api/estoque/busca_endereco", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ param: { enderecoParam: manualId } }),
      });
      const jsonEnd = await resEnd.json();
      if (!resEnd.ok) {
        setErroEndereco(true);
        setDadosEndereco(null);
        setProdutosOcupacao([]);
        return;
      }
      setErroEndereco(false);
      setDadosEndereco(jsonEnd.data);

      // 2) Busca produtos na ocupação usando ID retornado
      const idOcup = jsonEnd.data.ocupacoes_estoque_id1;
      console.log("ID da ocupação extraído:", idOcup);
      const resProd = await fetch("/api/estoque/busca_produtos_ocupacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ param: { ocupacaoParam: idOcup } }),
      });
      const jsonProd = await resProd.json();
      if (!resProd.ok) {
        setErroOcupacao(true);

        setProdutosOcupacao([]);
        return;
      }
      setProdutosOcupacao(Array.isArray(jsonProd.data) ? jsonProd.data : []);
    } catch (err) {
      console.error(err);
      setErroEndereco(true);
      setDadosEndereco(null);
      setProdutosOcupacao([]);
    }
  };

  // Renderiza formulário dinâmico
  const renderForm = () => {
    if (!selecionado) return null;
    const props = {
      produto: selecionado.idProduto,
      ocupacao_entrada: dadosEndereco?.ocupacoes_estoque_id,
    };
    switch (selecionado.tipo) {
      case "entrada":
        return <FormEntrada {...props} />;
      default:
        return null;
    }
  };

  return (
    <Container className="py-4">
      <h1 className="text-center">Movimentos de Estoque</h1>

      {/* Input manual do ID de endereço */}
      <Form className="mb-4 d-flex gap-2 justify-content-center">
        <Form.Group controlId="manualId">
          <Form.Label>Endereço (Ex: R01-C01-N1)</Form.Label>
          <Form.Control
            type="text"
            value={manualId}
            onChange={(e) => setManualId(e.target.value)}
            placeholder="Digite ou escaneie o código"
            autoFocus
          />
        </Form.Group>
        <Row className="align-items-end">
          <Col>
            <Button type="button" onClick={handleManualSelect}>
              Carregar
            </Button>
          </Col>
        </Row>
      </Form>

      {erroEndereco && (
        <div className="text-center text-danger mb-4">
          Endereço inválido. Verifique o padrão RDD-CXX-NX.
        </div>
      )}
      {erroOcupacao && (
        <div className="text-center text-secundary mb-4">
          Sem Produtos Ocupando o Endereço.
        </div>
      )}

      {/* Lista de produtos na ocupação */}
      {produtosOcupacao.length > 0 && (
        <Card className="mb-4">
          <Card.Header>
            Produtos na Ocupação {dadosEndereco?.endereco}
          </Card.Header>
          <Card.Body>
            <ul>
              {produtosOcupacao.map((item) => (
                <li key={item.id}>
                  {item.produto_nome || item.nome} — Qtde: {item.quantidade}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      )}

      {/* Barra de cards de ação */}
      <div
        className="d-flex justify-content-center overflow-auto mb-4"
        style={{ gap: "1rem" }}
      >
        {opcoesMovimentosEstoque
          .filter(
            (opcao) => produtosOcupacao.length > 0 || opcao.tipo === "entrada"
          )
          .map((opcao) => (
            <Card
              key={opcao.tipo}
              onClick={() => setSelecionado(opcao)}
              className={`flex-shrink-0 ${
                selecionado === opcao ? "border-primary" : ""
              }`}
              style={{ width: "10rem", cursor: "pointer" }}
            >
              <Card.Body className="p-2 text-center">{opcao.nome}</Card.Body>
            </Card>
          ))}
      </div>

      {/* Formulário conforme seleção */}
      {selecionado ? (
        <Card>
          <Card.Body>{renderForm()}</Card.Body>
        </Card>
      ) : (
        <p className="text-center">Selecione uma ação acima para continuar.</p>
      )}
    </Container>
  );
}
