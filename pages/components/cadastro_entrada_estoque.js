import { useState } from "react";
import { useRouter } from "next/router";
import Loading from "./loading";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
//import getProduct from "../../pages/api/nocodb_integraction/products/getProduct";

export default function CadastroEntradaEstoque(
  { produto },
  { ocupacao_entrada } = { ocupacao_entrada: null } // Adiciona valor padrão para ocupacao_entrada
) {
  const router = useRouter();
  const [produtoBuscado, setProdutoBuscado] = useState(null);
  const [endereço_entrada, setEndereçoEntrada] = useState(
    ocupacao_entrada || ""
  ); // Inicializa com o valor de ocupacao_entrada ou uma string vazia
  const [quantidade_entrada, setQuantidadeEntrada] = useState("");
  const [campoValido, setCampoValido] = useState(true);

  const BuscaProduto = async (id) => {
    try {
      const response = await fetch(
        `/api/nocodb_integraction/products/getProduct?id_product=${id}`
      );
      const produto = await response.json();
      if (produto) {
        setProdutoBuscado(produto);
        // Aqui você pode fazer algo com o produto, como exibir os detalhes
        console.log(produto);
      } else {
        console.error("Produto não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  };

  if (produtoBuscado === null) {
    BuscaProduto(produto);
    return <Loading />;
  }

  const sku_Produto = produtoBuscado?.produto?.sku || "N/A"; // Verifica se o produto existe antes de acessar a propriedade
  const nome_Produto = produtoBuscado?.produto?.nome || "N/A"; // Verifica se o produto existe antes de acessar a propriedade
  // Chama a função de busca do produto quando o componente é montado
  const verificarCampos = async (e) => {
    e.preventDefault();
    if (quantidade_entrada <= 0 || !endereço_entrada) {
      setCampoValido(false);
      return;
    } else {
      setCampoValido(true);
    }
    // Aqui você pode adicionar a lógica para salvar a entrada de estoque
    console.log("Entrada de estoque salva:", {
      produto: nome_Produto,
      sku: sku_Produto,
      quantidade: quantidade_entrada,
      endereço: endereço_entrada,
    });

    const data = {
      ocupacao_destino_id: endereço_entrada, // supondo que seja um número ou ID
      quantidade: quantidade_entrada,
      motivo: "Inventário",
      observacoes: `Entrada registrada via formulário, produto ${nome_Produto}`,
      produtos_id: produtoBuscado.produto.id, // Certifique-se de que este campo está sendo enviado corretamente
    };

    try {
      const response = await fetch("/api/movimentos/entrada_produto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Entrada de estoque registrada:", result);
        // Redireciona para a página de estoque após salvar
      } else {
        console.error(
          "Erro ao registrar entrada de estoque:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erro ao enviar entrada de estoque:", error);
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Cadastro de Entrada de Estoque</h2>
          <Form>
            <Form.Group controlId="formProduto">
              <Form.Label>Nome do Produto</Form.Label>
              <Form.Control
                type="text"
                value={nome_Produto}
                placeholder="Selecione um produto"
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formCodigoProduto">
              <Form.Label>Código do Produto</Form.Label>
              <Form.Control
                type="text"
                value={sku_Produto}
                placeholder="Selecione um produto"
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formQuantidade">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="number"
                placeholder="Digite a quantidade"
                value={quantidade_entrada}
                onChange={(e) => setQuantidadeEntrada(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group controlId="formDataEntrada">
              <Form.Label>Endereço da Entrada</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o endereço da entrada"
                defaultValue={ocupacao_entrada || ""}
                value={endereço_entrada}
                onChange={(e) => setEndereçoEntrada(e.target.value)}
              />
            </Form.Group>
            {!campoValido && (
              <div className="alert alert-danger mt-3">
                Por favor, preencha todos os campos corretamente.
              </div>
            )}
            <Button
              className="mt-3"
              variant="primary"
              type="submit"
              onClick={verificarCampos}
            >
              Salvar Entrada
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
