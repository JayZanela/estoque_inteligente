import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function PaginaCadastro() {
  // Função para lidar com o envio do formulário

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">Cadastro</h2>

      <Form>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group controlId="formNome" className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite o email" />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Salvar
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
