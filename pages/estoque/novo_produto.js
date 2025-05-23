import Router from "next/router";
import { Container } from "react-bootstrap";

export default function NovoProduto() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // Aqui você pode fazer uma requisição para a API ou qualquer outra lógica
    // Exemplo: fetch('/api/produtos', { method: 'POST', body: JSON.stringify(data) });

    // Redireciona para a página de produtos após o envio
    Router.push("/estoque/produtos");
  };

  return (
    <div
      style={{
        width: "99vw",
        height: "99vh",
        overflow: "hidden",
        margin: "0px",
        padding: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <iframe
        src="https://nocodb.plataforma.app/dashboard/#/nc/form/1d2e45a5-cb12-4073-92a2-1d919b4b9ce8"
        loading="lazy"
        width="95%"
        height="1200px" // maior que o container
        style={{
          marginTop: "-40px", // 🔥 corte visual para esconder o topo
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}
