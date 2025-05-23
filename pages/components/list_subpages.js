import { Nav, Container } from "react-bootstrap";
import { useState } from "react";

// Importa seus componentes para cada "rota"
import CadastroProdutos from "../estoque/cadastro";
//import Relatorios from "./relatorios";
//import EstoqueAtual from "./atual";
import Galeria from "../estoque/galleria";


export default function ListaSubpages() {
  const [paginaAtiva, setPaginaAtiva] = useState("cadastro");

  const paginas = [
    { nome: "Cadastro Produtos", id: "cadastro", componente: <CadastroProdutos /> },
    //{ nome: "Relatórios", id: "relatorios", componente: <Relatorios /> },
    //{ nome: "Estoque Atual", id: "atual", componente: <EstoqueAtual /> },
  ];

  return (
    <Container fluid>
      <Nav variant="tabs" activeKey={paginaAtiva} className="border-1">
        {paginas.map(({ nome, id }) => (
          <Nav.Item key={id}>
            <Nav.Link
              onClick={() => setPaginaAtiva(id)}
              eventKey={id}
              style={{ cursor: "pointer" }}
            >
              {nome}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <div className="mt-4">
        {paginas.find(({ id }) => id === paginaAtiva)?.componente}
      </div>
    </Container>
  );
}
