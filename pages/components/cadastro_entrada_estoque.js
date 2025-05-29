// pages/components/cadastro_entrada_estoque.jsx
import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Loading from "./loading";

export default function CadastroEntradaEstoque({
  produto,
  ocupacao_entrada = "",
}) {
  const [produtoBuscado, setProdutoBuscado] = useState(null);
  const [endereco, setEndereco] = useState(ocupacao_entrada);
  const [quantidade, setQuantidade] = useState("");
  const [motivo, setMotivo] = useState(null);
  const [enderecoFormato, setEnderecoFormato] = useState(false);
  const [enderecoExiste, setEnderecoExiste] = useState(true);

  const motivos = ["Inventário", "Compra", "Venda", "Devolução"];
  let resultSubmit = null;

  useEffect(() => {
    if (!produtoBuscado) {
      fetch(
        `/api/nocodb_integraction/products/getProduct?id_product=${produto}`
      )
        .then((r) => r.json())
        .then((json) => setProdutoBuscado(json))
        .catch(console.error);
    }
  }, [produto, produtoBuscado]);

  useEffect(() => {
    if (enderecoFormato) {
      handleEndereco();
    }
  }, [enderecoFormato]);

  console.log(produto);

  if (!produtoBuscado) return <Loading />;

  const { sku, nome } = produtoBuscado.produto;

  const handleEndereco = async () => {
    const reqBuscaEndereco = await fetch("/api/estoque/busca_endereco", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ param: { enderecoParam: endereco } }),
    });

    if (!reqBuscaEndereco.ok) {
      return setEnderecoExiste(false);
    }
    setEnderecoExiste(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!enderecoExiste || !enderecoFormato) {
      return (resultSubmit = { codigo: 400, mensagem: "Parametros Inválidos" });
    }

    const reqEntrada = await fetch("api/movimentos/entrada_produto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });

    if (!reqEntrada.ok) {
      const erroJson = await reqEntrada.json();
      return (resultSubmit = {
        codigo: reqEntrada.status,
        mensagem: erroJson.error,
      });
    }
    return (resultSubmit = {
      codigo: reqEntrada.status,
      mensagem: "Movimentação efetuada.",
    });
    // … sua lógica de verificação e post
  };

  return (
    <Container fluid className="mt-2">
      <Row className="justify-content-center">
        <Col md={8} className="d-flex justify-content-center">
          {resultSubmit !== null && <p>{resultSubmit.mensagem}</p>}
        </Col>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            {/* Campos */}
            <Form.Group controlId="formQuantidade">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                value={endereco}
                onChange={(e) => {
                  const valor = e.target.value;
                  setEndereco(valor);

                  const regex = /^R\d{2}-C\d{2}-N\d$/;
                  setEnderecoFormato(regex.test(valor));
                }}
                isInvalid={!enderecoFormato || !enderecoExiste}
              />
              {!enderecoExiste && (
                <Form.Control.Feedback type="invalid">
                  Endereço não existe.
                </Form.Control.Feedback>
              )}
              {!enderecoFormato && enderecoExiste && (
                <Form.Control.Feedback type="invalid">
                  Formato deve ser Rdd-Cdd-Nd (ex: R01-C01-N1)
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="motivoEntrada">
              <Form.Label>Motivo</Form.Label>
              <Form.Select
                value={motivo}
                onChange={(e) => {
                  setMotivo(e.target.value);
                }}
                defaultValue={motivos[0]}
              >
                <option>Selecione um motivo</option>
                {motivos.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button className="mt-3 mx-auto" variant="primary" type="submit">
              Salvar Entrada
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
