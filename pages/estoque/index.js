import { Container, Col, Row, Navbar, NavbarBrand } from "react-bootstrap";
import Header from "../components/header"; // Corrigido!
import ListaSubpages from "../components/list_subpages";
import Home_Estoque from "./home"; // Corrigido!
import CadastroEstqoue from "./cadastro"; // Corrigido!
import Home from "..";

export default function Estoque() {
  const subpages = [
    { nome: "Home", rota: "/estoque/home" },
    { nome: "Cadastro Produtos", rota: "/estoque/cadastro" },
    //  { nome: "Relatórios", rota: "/estoque/relatorios" },
    //{ nome: "Estoque Atual", rota: "/estoque/atual" },
    { nome: "Galeria", rota: "/estoque/galeria" },
  ];

  return (
    <>
      {/* Header fixo */}
      <Header />

      <ListaSubpages paginas={subpages} />
    </>
  );
}
