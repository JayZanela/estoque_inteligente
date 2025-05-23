import Header from "./components/header";
import AppLayout from "@/lib/layouts/applayout";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const path = router.pathname;

  const isEstoque = path.startsWith("/estoque");

  const Layout = isEstoque ? EstoqueLayout : AppLayout;

  const handleIrParaFiscalizacao = () => {
    const dados = {
      componente: "teste",
      preco_custo: 35,
      preco_venda: 75,
    };

    router.push({
      pathname: "/itens",
      query: dados,
    });
  };

  const handleHomeEstoque = () => {
    router.push({
      pathname: "/estoque",
    });
  };

  return (
    <Container className="mt-5 text-center">
      <h1>Estoque Inteligente</h1>
      <p>Bem-vindo ao sistema de controle de estoque!</p>

      <Button className="m-2" onClick={() => router.push("/estoque")}>
        Ir para Estoque
      </Button>
      <Button className="m-2" onClick={() => router.push("/fiscalizacao")}>
        Ir para Fiscalização
      </Button>
    </Container>
  );
}
