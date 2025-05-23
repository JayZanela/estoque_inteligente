import { useRouter } from "next/router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import subpagesEstoque from "@/lib/data/subPagesEstoque";
import { useState } from "react";

export default function Home_Estoque() {
  const router = useRouter();

  const subpages = subpagesEstoque;
  const subpagesParaHome = subpages.filter((p) => p.mostrarNaHome);

  const [paginaAtiva, setPaginaAtiva] = useState(
    subpagesParaHome?.[0]?.rota || ""
  );
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
          minHeight: "90vh",
          padding: "20px",
        }}
      >
        {subpagesParaHome.map((page, idx) => (
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
                  {page.nome}
                </Card.Title>
                <Card.Text>
                  {page.descricao ? (
                    <>{page.descricao}</>
                  ) : (
                    "Sem descrição Definida"
                  )}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => router.push(page.rota)}
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
