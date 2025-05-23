import {
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
  Navbar,
} from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

// Mapeamento dos componentes por rota
import CadastroProdutos from "../estoque/cadastro";
//import Relatorios from "../estoque/relatorios";
//import EstoqueAtual from "../estoque/atual";
import { useRouter } from "next/router";
import Galeria from "../estoque/galeria_endereco";
import Home_Estoque from "../estoque/home";

export default function ListaSubpages({ paginas }) {
  const router = useRouter();
  const [paginaAtiva, setPaginaAtiva] = useState(paginas?.[0]?.rota || "");

  return (
    <Container fluid className="g-0 p-2">
      <Nav variant="tabs" activeKey={router.pathname} className="border-2">
        <Nav.Item className=" d-flex align-items-center">
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="tooltip-gestao">
                Voltar para a Pagina Inicial da Gestão NXT
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
        {paginas.map(({ nome, rota }) => (
          <Nav.Item key={rota}>
            <Nav.Link
              onClick={() => router.push(rota)}
              eventKey={rota}
              style={{ cursor: "pointer" }}
            >
              {nome}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
}
