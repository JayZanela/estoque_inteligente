import { Container, Row, Col } from "react-bootstrap";

export default function GaleriaFiscal() {
  return (
    <Container fluid className="mt-2">
      <Row>
        <Col>
          <div
            style={{
              margin: 0,
              padding: 0,
              height: "100vh",
              width: "100vw",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://nocodb.plataforma.app/dashboard/#/nc/gallery/101867de-5465-4e7a-b768-47bc6902ac14"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Galeria NocoDB"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
