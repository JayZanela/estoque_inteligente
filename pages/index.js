import { useRouter } from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  const router = useRouter();

  const handleIrParaFiscalizacao = () => {
    const dados = {
      componente: "fiscalizacao",
      nome: "Joao",
      email: "joao@email.com",
      peso_unitario: 10,
      volume_fisico: 2,
      preco_custo: 35,
      preco_venda: 75,
      estoque_minimo: 5,
      estoque_maximo: 25,
      ponto_reposicao: 8,
      tempo_reposicao: 9,
    };
    const query = new URLSearchParams(dados).toString();
    router.push(`/itens/home_item?${query}`);
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
