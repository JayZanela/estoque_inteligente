import { useRouter } from "next/router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Home_Estoque() {
  const router = useRouter();

  const subpages = [
    {
      title: "Posições de Estoque",
      description:
        "Visualize e edite a localização física dos produtos nos porta-pallets.",
      path: "/estoque/posicoes",
    },
    {
      title: "Movimentações",
      description:
        "Acompanhe entradas, saídas e transferências de produtos no estoque.",
      path: "/estoque/movimentacoes",
    },
    {
      title: "Cadastro de Produtos",
      description: "Adicione e atualize informações dos produtos armazenados.",
      path: "/estoque/cadastro",
    },
  ];

  const handleVoltar = () => {
    router.push("/estoque");
  };

  return (
    <div>
      <div className="text-center mb-4">
        <h1>Estoque Inteligente</h1>
        <p className="text-muted">
          Bem-vindo ao sistema de controle de estoque!
        </p>
      </div>

      <Row
        className="w-100 d-flex justify-content-center g-0"
        style={{
          minHeight: "80vh",
          padding: "20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        {subpages.map((page, idx) => (
          <Col key={idx} className="p-0 mb-4 d-flex justify-content-center">
            <Card
              style={{ width: "100%", maxWidth: "90%" }}
              className="text-center shadow"
            >
              <Card.Body>
                <Card.Title
                  className="mb-3 d-flex justify-content-center"
                  as="h2"
                >
                  {page.title}
                </Card.Title>
                <Card.Text>{page.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => router.push(page.path)}
                >
                  Acessar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
