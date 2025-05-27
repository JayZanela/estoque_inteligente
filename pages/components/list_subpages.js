import {
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
  Navbar,
} from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ListaSubpages({ paginas = [] }) {
  const [telaPequena, setTelaPequena] = useState(false);
  const router = useRouter();

  // Verifica tamanho da tela
  useEffect(() => {
    const verificarTamanho = () => {
      setTelaPequena(window.innerWidth < 800);
    };

    verificarTamanho();
    window.addEventListener("resize", verificarTamanho);
    return () => window.removeEventListener("resize", verificarTamanho);
  }, []);

  return (
    <Container fluid className="g-0 p-2">
      <Nav variant="tabs" activeKey={router.pathname} className="border-2">
        <Nav.Item className="d-flex align-items-center">
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="tooltip-gestao">
                Voltar para a Página Inicial da Gestão NXT
              </Tooltip>
            }
          >
            <Navbar.Brand>
              <Link href="/" className="mb-0 h4 text-decoration-none">
                Gestão NXT 🛵
              </Link>
            </Navbar.Brand>
          </OverlayTrigger>
        </Nav.Item>

        {paginas.map(({ nome, rota }, index) => (
          <Nav.Item key={rota}>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id={`tooltip-${rota}`}>
                  {telaPequena ? nome : `Ir para ${nome}`}
                </Tooltip>
              }
            >
              <Nav.Link
                onClick={() => router.push(rota)}
                eventKey={rota}
                style={{ cursor: "pointer" }}
              >
                {telaPequena ? <strong>▪️</strong> : nome}
              </Nav.Link>
            </OverlayTrigger>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
}
