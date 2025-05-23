import { useRouter } from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  const router = useRouter();

const handleIrParaFiscalizacao = () => {
  const dados = {
    componente: "teste",
    preco_custo: 35,
    preco_venda: 75,
    // etc
  };

  router.push({
    pathname: '/itens/home_item',
    query: dados,
  });
};

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h3>Sistema NXT</h3>
          <Button
            variant="primary"
            className="mt-4"
            onClick={handleIrParaFiscalizacao}
          >
            Ir para Fiscalização
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
