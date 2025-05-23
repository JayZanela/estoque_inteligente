// components/Header.js
import { Navbar, Container, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  const handleIrParaFiscalizacao = () => {
    const dados = {
      componente: "fiscalizacao",
      preco_custo: 35,
      preco_venda: 75,
    };

    router.push({
      pathname: "../itens",
      query: dados,
    });
  };

  const handleIrParaEstoque = () => {
    router.push("../estoque");
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid className="align-items-center gap-3">
        <div className="d-flex align-items-center gap-3">
          <Navbar.Brand>
            <Link href="/" className="mb-0 h4 text-decoration-none">
              Gestão NXT 🛵
            </Link>
          </Navbar.Brand>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={handleIrParaFiscalizacao}
          >
            Fiscalização
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={handleIrParaEstoque}
          >
            Estoque
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
