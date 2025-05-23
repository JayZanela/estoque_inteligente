import Header from "./components/header";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleIrParaFiscalizacao = () => {
    const dados = {
      componente: "teste",
      preco_custo: 35,
      preco_venda: 75,
    };

    router.push({
      pathname: '/itens',
      query: dados,
    });
  };

  const handleHomeEstoque = () => {
    router.push({
      pathname: '/estoque',
    });
  };

  return (
    <>
      {/* Header fixo */}
      <Header />

      {/* Conteúdo principal */}
      <Container fluid className="mt-1">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
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
    </>
  );
}
