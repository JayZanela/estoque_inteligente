import { useState } from "react";

export default function FormularioProduto() {
  const [formData, setFormData] = useState({
    Preco_Custo: "",
    Preco_Venda: "",
    Peso_Unitario: "",
    Volume_Fisico: "",
    Estoque_Minimo: "",
    Estoque_Maximo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/novo-produto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center h-screen"
    >
      <h1 className="text-2xl font-bold mb-4">Cadastro de Produto</h1>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label className="block text-sm font-medium capitalize">
            {key.replace("_", " ")}
          </label>
          <input
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Salvar
      </button>
    </form>
  );
}
