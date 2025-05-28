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

  if (!produtoBuscado) return <Loading />;

  if (produtoBuscado.status !== 200) {
    return null;
  }
  const { sku, nome } = produtoBuscado.produto;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // … sua lógica de verificação e post
  };

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Entrada de Estoque: {nome}</h2>
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
                onChange={(e) => setEndereco(e.target.value)}
              />
            </Form.Group>

            <Button className="mt-3" variant="primary" type="submit">
              Salvar Entrada
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
