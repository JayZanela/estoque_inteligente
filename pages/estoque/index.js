import { Container, Col, Row, Navbar, NavbarBrand } from "react-bootstrap";
import Header from "../components/header"; // Corrigido!
import ListaSubpages from "../components/list_subpages";
import subpagesEstoque from "@/lib/data/subPagesEstoque";
import Home_Estoque from "./home";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Estoque() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/estoque/home");
  }, [router]);

  return null;
}
