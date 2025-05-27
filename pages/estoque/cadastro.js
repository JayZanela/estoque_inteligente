import { useRouter } from "next/router";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";

export default function CadastroEstoque() {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [codigoExiste, setCodigoExiste] = useState(0);
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);
  const [selectedProdutoId, setSelectedProdutoId] = useState(null);
  const inputRef = useRef(null);

  const handleVoltar = () => {
    router.push("/estoque");
  };

  const validarCodigoBarras = async () => {
    try {
      if (!codigo) {
        setCodigoExiste(3);
        return;
      }

      console.log("Validando código de barras:", codigo);
      const response = await fetch(
        "/api/nocodb_integraction/search/validaCodigoBarras",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ codigo_barras: codigo }),
        }
      );

      if (response.status !== 200) {
        router.push("/estoque/novo_produto?codigo=" + codigo);
        return;
      }

      const dataJson = await response.json();
      const produtos = Array.isArray(dataJson.produto)
        ? dataJson.produto
        : [dataJson.produto];

      setProdutosRelacionados(produtos);
      setCodigoExiste(1);

      console.log("Produtos relacionados:", produtos);
      console.log("Código existe:", 1);
    } catch (error) {
      console.error("Erro ao validar código de barras:", error);
    }
  };

  return (
    <Container
      fluid
      className="mt-1 d-flex flex-column justify-content-center align-items-center"
    >
      <Row className="w-100 d-flex justify-content-center">
        <div className="text-center mb-4">
          <h1>Antes de Seguir‼️</h1>
          <h4 className="text-muted">
            Se houver um Código de Barras, informe-o aqui:
          </h4>
        </div>
      </Row>

      <Row className="w-50 d-flex justify-content-center">
        <Form>
          <Form.Group controlId="formCodigoBarras">
            <Form.Control
              type="text"
              placeholder="Escaneie ou digite o código de barras"
              autoFocus
              onChange={(e) => setCodigo(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  validarCodigoBarras(); // chama sua função de busca
                }
              }}
            />
          </Form.Group>
        </Form>
      </Row>

      {codigoExiste == 1 && (
        <Row className="w-50 mt-4 d-flex flex-column align-items-center">
          <p className="text-danger fw-bold">
            ⚠️ Código já existente no sistema!
          </p>
          <p className="h3 p-0">Produtos Relacionados</p>
          <Form>
            <Form.Group controlId="produtosRelacionadosSelect">
              {produtosRelacionados.map((p, i) => (
                <Form.Check
                  key={p.id}
                  type="radio"
                  name="produtoSelecionado"
                  id={`produto-${p.id}`}
                  value={p.id}
                  label={
                    <div>
                      <strong>{p.nome}</strong>
                      <div className="text-muted small">
                        <strong>Descrição:</strong> {p.descricao}
                      </div>
                    </div>
                  }
                  checked={Number(selectedProdutoId) === p.id}
                  onChange={() => setSelectedProdutoId(p.id)}
                />
              ))}
            </Form.Group>
          </Form>
          <Button
            className="mt-3"
            variant="outline-success"
            onClick={() => {
              if (selectedProdutoId !== null) {
                router.push(
                  `/estoque/cadastro_existente?codigo=${codigo}&produtoId=${selectedProdutoId}`
                );
              } else {
                alert("Por favor, selecione um produto relacionado.");
              }
            }}
          >
            Ir para Cadastro Existente
          </Button>
        </Row>
      )}
      {codigoExiste == 3 && (
        <Row className="w-50 mt-4 d-flex flex-column align-items-center">
          <p className="text-danger fw-bold">
            ❌ Favor Insira o Código de Barras para prosseguir.
          </p>
          <Button
            variant="outline-primary"
            onClick={() => router.push("/estoque/novo_produto")}
          >
            Cadastrar Novo Produto
          </Button>
        </Row>
      )}

      <Row className="w-30 mt-3 d-flex justify-content-center">
        <Button variant="outline-primary" onClick={validarCodigoBarras}>
          Buscar Produto
        </Button>
      </Row>

      {codigoExiste == 1 && (
        <Row className="w-40 mt-3 d-flex justify-content-center">
          <Button
            variant="outline-secondary"
            onClick={() =>
              router.push("/estoque/novo_produto?codigo=" + codigo)
            }
          >
            Novo Produto Relacionado
          </Button>
        </Row>
      )}

      <Row className="w-10 mt-3 d-flex justify-content-center">
        <Button
          variant="outline-danger"
          onClick={() => router.push("/estoque/novo_produto")}
        >
          Não Tenho Código de Barras
        </Button>
      </Row>
    </Container>
  );
}
