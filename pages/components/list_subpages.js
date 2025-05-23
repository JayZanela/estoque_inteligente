import { Nav, Container } from "react-bootstrap";
import { useState } from "react";

// Mapeamento dos componentes por rota
import CadastroProdutos from "../estoque/cadastro";
//import Relatorios from "../estoque/relatorios";
//import EstoqueAtual from "../estoque/atual";
import Galeria from "../estoque/galeria";
import Home_Estoque from "../estoque/home";

const componentes = {
  "/estoque/cadastro": <CadastroProdutos />,
  //"/estoque/relatorios": <Relatorios />,
  //"/estoque/atual": <EstoqueAtual />,
  "/estoque/galeria": <Galeria />,
  "/estoque/home": <Home_Estoque />,
};

export default function ListaSubpages({ paginas }) {
  const [paginaAtiva, setPaginaAtiva] = useState(paginas?.[0]?.rota || "");

  return (
    <Container fluid>
      <Nav variant="tabs" activeKey={paginaAtiva} className="border-1">
        {paginas.map(({ nome, rota }) => (
          <Nav.Item key={rota}>
            <Nav.Link
              onClick={() => setPaginaAtiva(rota)}
              eventKey={rota}
              style={{ cursor: "pointer" }}
            >
              {nome}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <div className="mt-4">
        {componentes[paginaAtiva] || <p>Componente não encontrado.</p>}
      </div>
    </Container>
  );
}
