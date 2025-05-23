import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormularioProduto from "../components/formularioProduto"; // Corrigido!
import CadastroCompleto from "../components/cadastros_completo";
import CadastroFiscal from "../components/cadastros_fiscais"; // se for o default

export default function HomeItemPage() {
  const router = useRouter();
  const [componente, setComponente] = useState(null);

  useEffect(() => {
    if (router.isReady && router.query.componente) {
      console.log("router.query no useEffect:", router.query);
      setComponente(router.query.componente);
    }
  }, [router.isReady, router.query]);

  const renderConteudo = () => {
    switch (componente) {
      case "fiscalizacao":
        return <FormularioProduto />;
      case "outro":
        return <CadastroCompleto />;
      default:
        return <CadastroFiscal />;
    }
  };

  return (
    <Container fluid className="mt-4">
      <Button onClick={() => console.log("Query manual:", router.query)}>
        Ver Query no console
      </Button>
      <Row>
        <Col md={2} className="bg-light p-3 border-end">
          <h5>Menu</h5>
          <Button
            variant="outline-primary"
            className="w-100 mb-2"
            onClick={() => router.push("/itens/home_item?componente=outro")}
          >
            Cadastro Completo
          </Button>
          <Button
            variant="outline-primary"
            className="w-100 mb-2"
            onClick={() => {
              const dados = {
                componente: "fiscalizacao",
                nome: "Joao",
                email: "joao@email.com",
                peso_unitario: 10,
                volume_fisico: 2,
                preco_custo: 35,
                preco_venda: 75,
                estoque_minimo: 5,
                estoque_maximo: 25,
                ponto_reposicao: 8,
                tempo_reposicao: 9,
              };
              router.push({
                pathname: "/itens/home_item",
                query: dados,
              });
            }}
          >
            Fiscalização
          </Button>
        </Col>
        <Col md={10} className="p-4">
          <h1>CONTEÚDO DINÂMICO</h1>
          {renderConteudo()}
        </Col>
      </Row>
    </Container>
  );
}
