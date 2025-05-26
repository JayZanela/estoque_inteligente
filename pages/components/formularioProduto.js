"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { buscarModelosExistentes } from "@/lib/utils/buscar_modelos_existentes";

export default function FormularioProduto({ codigo_Barras }) {
  const router = useRouter();
  const query = router.query;

  const [modelosexistentes, setModelosExistentes] = useState(["NENHUM"]);
  const busca_modelos = async () => {
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
    }
  };

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

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (Object.keys(query).length > 0) {
      setFormData({ ...query });
    }
  }, [query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      ...Object.fromEntries(formData.entries()),
      codigo_barras: codigo_Barras,
    };
    console.log("Dados do formulário:", data);
    let novoProduto = null;
    try {
      const response = await fetch(
        "/api/nocodb_integraction/products/insertNewProduct_estoque",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        novoProduto = await response.json();
        console.log("Novo produto criado:", novoProduto);
      }
    } catch (error) {
      console.error("Erro ao criar novo produto:", error);
    }
    try {
      const response = await fetch("/api/modelos/relacionar_modelos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ produto: { id: novoProduto.id } }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Modelos relacionados com sucesso:", data);
      }
    } catch (error) {
      console.error("Erro ao relacionar Modelos:", error);
    }
    router.push("/estoque/cadastro");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={12}>
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
  );
}
