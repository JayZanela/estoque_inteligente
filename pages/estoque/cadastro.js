import { useRouter } from "next/router";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function CadastroEstoque() {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [codigoExiste, setCodigoExiste] = useState(false); // agora é boolean

  const handleVoltar = () => {
    router.push("/estoque");
  };

  const validarCodigoBarras = async () => {
    try {
      console.log(codigo);
      const response = await fetch(
        "/api/nocodb_integraction/search/validaCodigoBarras",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ codigo_barras: codigo }),
        }
      );

      setCodigoExiste(response.status === 200);
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
              placeholder="Digite o código de barras"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Row>

      {codigoExiste && (
        <Row className="w-50 mt-4 d-flex flex-column align-items-center">
          <p className="text-danger fw-bold">
            ⚠️ Código já existente no sistema!
          </p>
          <Button
            variant="outline-success"
            onClick={() =>
              router.push(`/estoque/cadastro_existente?codigo=${codigo}`)
            }
          >
            Ir para Cadastro Existente
          </Button>
        </Row>
      )}

      <Row className="w-30 mt-3 d-flex justify-content-center">
        <Button variant="outline-primary" onClick={validarCodigoBarras}>
          Buscar Produto
        </Button>
      </Row>

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
