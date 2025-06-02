"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Loading from "./loading";

export default function FormularioProduto({ codigo_Barras }) {
  const router = useRouter();
  const query = router.query;

  const [modelosexistentes, setModelosExistentes] = useState(["NENHUM"]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [resultadoSave, setResultadoSave] = useState({
    status: 0,
    message: "Preencha Todos os campos.",
    is: false,
  });
  const [novoProduto, setNovoProduto] = useState({});

  // Função para buscar modelos existentes
  const busca_modelos = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/modelos/listar_modelos");
      const data = await response.json();
      if (response.status === 200) {
        const nomes = data.modelos.map((m) => m.nome); // ou usar m.id e m.nome
        setModelosExistentes(nomes);
      } else {
        console.error("Erro ao buscar modelos:", data.error);
      }
    } catch (error) {
      console.error("Erro ao buscar modelos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Chama a função para buscar modelos quando o componente é montado
  useEffect(() => {
    busca_modelos();
  }, []);

  const campos = [
    { id: "nome", label: "Nome", tipo: "text" },
    { id: "descricao", label: "Descrição", tipo: "text" },
    {
      id: "tipo_embalagem",
      label: "Tipo de Embalagem",
      tipo: "select",
      opcoes: [
        "Caixa",
        "Pacote",
        "Envelope",
        "Maço",
        "Rolo",
        "Bobina",
        "Unidade",
        "Pallet",
        "Fardo",
        "Plástico",
        "Blister",
      ],
    },
    {
      id: "unidade_medida",
      label: "Unidade de Medida",
      tipo: "select",
      opcoes: [
        "UN",
        "CX",
        "PC",
        "KG",
        "G",
        "L",
        "ML",
        "M",
        "CM",
        "MM",
        "MT",
        "ROLO",
        "PCT",
        "MÇ",
      ],
    },
    {
      id: "modelo",
      label: "Modelo",
      tipo: "select",
      opcoes: modelosexistentes,
    },
  ];

  // Preenche os campos do formulário com os dados da query, se existirem
  useEffect(() => {
    if (Object.keys(query).length > 0) {
      setFormData({ ...query });
    }
  }, [query]);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      ...Object.fromEntries(formData.entries()),
      codigo_barras: codigo_Barras,
    };

    try {
      const response = await fetch(
        "/api/nocodb_integraction/products/inserirProdutoNovo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const repsonseJson = await response.json();
        setNovoProduto(repsonseJson);
        setResultadoSave({
          status: 200,
          message: "Produto criado com sucesso! Redirecionando...",
          is: true,
        });
        console.log("Novo produto criado:", repsonseJson);
        router.push(`/estoque/movimentos?produtoId=${repsonseJson.id}`);
      } else {
        const errorData = await response.json();
        setResultadoSave({
          status: 400,
          message: errorData.error,
          is: false,
        });
      }
    } catch (error) {
      console.error("Erro ao criar novo produto:", error);
      setResultadoSave({
        status: 500,
        message: "Erro interno ao criar produto.",
        is: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {resultadoSave.is && alert(resultadoSave.message)}
      {!resultadoSave.is && resultadoSave.status !== 0 && (
        <div className="alert alert-warning text-center">
          {resultadoSave.message}
        </div>
      )}
      {loading && <Loading />}
      <Form onSubmit={handleSubmit} className="mt-3 mb-3 ps-3 pe-3">
        <Row>
          <Col md={8} className="mx-auto">
            {campos.map((campo) => (
              <Form.Group
                key={campo.id}
                controlId={`form${campo.id}`}
                className="mb-3"
              >
                <Form.Label className="d-flex justify-content-center">
                  {campo.label}
                </Form.Label>

                {campo.tipo === "select" ? (
                  <Form.Select
                    name={campo.id}
                    value={formData[campo.id] || ""}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    {campo.opcoes.map((opcao) => (
                      <option key={opcao} value={opcao}>
                        {opcao}
                      </option>
                    ))}
                  </Form.Select>
                ) : (
                  <Form.Control
                    type={campo.tipo}
                    name={campo.id}
                    value={formData[campo.id] || ""}
                    onChange={handleChange}
                  />
                )}
              </Form.Group>
            ))}

            <div className="d-flex justify-content-end">
              <div className="pe-2">
                <Button
                  variant="outline-danger"
                  onClick={() => router.push("/estoque/cadastro")}
                >
                  Cancelar
                </Button>
              </div>
              <div>
                <Button variant="primary" type="submit">
                  Salvar
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}
