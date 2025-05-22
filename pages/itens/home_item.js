import { useRouter } from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";
import CadastroFiscal from "../components/cadastros_fiscais";
import CadastroCompleto from "../components/cadastros_completo";
import FormularioProduto from "../components/formularioProduto";

export default function HomeItemPage() {
  const router = useRouter();
  const { componente } = router.query;

  const renderConteudo = () => {
    switch (componente) {
      case "outro":
        return <CadastroCompleto />;
      case "fiscalizacao":
        return <FormularioProduto />;
      default:
        return <CadastroFiscal />;
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Menu lateral */}
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
              const query = new URLSearchParams(dados).toString();
              router.push(`/itens/home_item?${query}`);
            }}
          >
            Fiscalização
          </Button>
        </Col>

        {/* Conteúdo dinâmico */}
        <Col md={10} className="p-4">
          {renderConteudo()}
        </Col>
      </Row>
    </Container>
  );
}
