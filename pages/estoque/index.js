import { Container, Col, Row, Navbar, NavbarBrand } from "react-bootstrap";
import Header from "../components/header"; // Corrigido!
import ListaSubpages from "../components/list_subpages";
import CadastroEstqoue from "./cadastro"; // Corrigido!


export default function Estoque() {

      const subpages = [
    { nome: "Cadastro Produtos", rota: "/estoque/cadastro" },
    { nome: "Relatórios", rota: "/estoque/relatorios" },
    { nome: "Estoque Atual", rota: "/estoque/atual" },
  ];

    return (
        <>
            {/* Header fixo */}
        <Header />

    
      <ListaSubpages paginas={subpages} />
    

        
            
            <Col>

            </Col>
        </>
    );

}