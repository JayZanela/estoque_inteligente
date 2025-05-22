"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function FormularioProduto() {
  const router = useRouter();
  const query = router.query;

  const campos = [
    { id: "nome", label: "Nome", tipo: "text" },
    { id: "email", label: "Email", tipo: "email" },
    { id: "peso_unitario", label: "Peso Unitário", tipo: "number" },
    { id: "volume_fisico", label: "Volume Físico", tipo: "number" },
    { id: "preco_custo", label: "Preço de Custo", tipo: "number" },
    { id: "preco_venda", label: "Preço de Venda", tipo: "number" },
    { id: "estoque_minimo", label: "Estoque Mínimo", tipo: "number" },
    { id: "estoque_maximo", label: "Estoque Máximo", tipo: "number" },
    { id: "ponto_reposicao", label: "Ponto de Reposição", tipo: "number" },
    { id: "tempo_reposicao", label: "Tempo de Reposição", tipo: "number" },
  ];

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (Object.keys(query).length > 0) {
      setFormData({ ...query });
    }
  }, [query]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form>
      <Row>
        <Col md={12}>
          {campos.map((campo) => (
            <Form.Group
              key={campo.id}
              controlId={`form${campo.id}`}
              className="mb-3"
            >
              <Form.Label>{campo.label}</Form.Label>
              <Form.Control
                type={campo.tipo}
                name={campo.id}
                value={formData[campo.id] || ""}
                onChange={handleChange}
              />
            </Form.Group>
          ))}

          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}
