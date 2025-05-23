import { useRouter } from "next/router";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

export default function CadastroEstoque() {
  const router = useRouter();

  const handleVoltar = () => {
    router.push("/estoque");
  };

  return (
    <Container
      fluid
      className="mt-1 d-flex flex-column justify-content-center align-items-center"
    >
      <Row className="w-100 d-flex justify-content-center">
        <p className="text-center mb-4">
          <h1>Antes de Seguir‼️</h1>
          <h4 className="text-muted">
            Se houver um Codigo de Barras, Informe-o Aqui:
          </h4>
        </p>
      </Row>
      <Row className="w-50 d-flex justify-content-center">
        <Form>
          <Form.Group controlId="formCodigoBarras">
            <Form.Control type="text" placeholder="Digite o código de barras" />
          </Form.Group>
        </Form>
      </Row>
      <Row className="w-30 mt-3 d-flex justify-content-center">
        <Button
          variant="outline-primary"
          onClick={() => router.push("/estoque/cadastro")}
        >
          Buscar Produto
        </Button>
      </Row>
      <Row className="w-10 mt-3 d-flex justify-content-center">
        <Button
          variant="outline-danger"
          onClick={() => router.push("/estoque/novo_produto")}
        >
          Não Tenho Codigo de Barras
        </Button>
      </Row>
    </Container>
  );
}
