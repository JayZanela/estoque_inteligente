import { useSearchParams } from "next/navigation";
import Router from "next/router";
import { Container, Div } from "react-bootstrap";
import FormularioProduto from "../components/formularioProduto";

export default function NovoProduto() {
  const searchParams = useSearchParams();
  const codigo = searchParams.get("codigo");

  const inputCodigoBarras = () => {
    if (codigo != "") {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // Aqui você pode fazer uma requisição para a API ou qualquer outra lógica
    // Exemplo: fetch('/api/produtos', { method: 'POST', body: JSON.stringify(data) });

    // Redireciona para a página de produtos após o envio
    Router.push("/estoque/movimentos?");
  };

  return (
    <Container fluid className="mt-5 mb-5">
      <div
        md={11}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          margin: "0px",
          padding: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container fluid className="mt-5 justify-content-center">
          <h1 className="text-center">Cadastrar Novo Produto</h1>
          <p className="text-center">
            Preencha os dados do novo produto abaixo:
          </p>
          {inputCodigoBarras() && (
            <div className="alert alert-secondary text-center">
              Código de Barras: {codigo}
            </div>
          )}
          <FormularioProduto onSubmit={handleSubmit} codigo_Barras={codigo} />
        </Container>
      </div>
    </Container>
  );
}
