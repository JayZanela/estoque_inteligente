import { useState } from "react";

export default function CadastroCompleto() {
  const [idProduto, setIdProduto] = useState("");
  const [formData, setFormData] = useState({
    Preco_Custo: "",
    Preco_Venda: "",
    Peso_Unitario: "",
    Volume_Fisico: "",
    Estoque_Minimo: "",
    Estoque_Maximo: "",
  });

  const Produto = async () => {
    if (!idProduto) {
      alert("Digite o ID do produto");
      return;
    }

    try {
      const res = await fetch(
        `/api/nocodb_integraction/products/getProduct?id_product=${idProduto}`
      );
      const data = await res.json();
      console.log("Produto retornado:", data);

      if (data?.produto) {
        setFormData({
          Preco_Custo: data.produto.preco_custo || "",
          Preco_Venda: data.produto.preco_venda || "",
          Peso_Unitario: data.produto.peso_unitario || "",
          Volume_Fisico: data.produto.volume_fisico || "",
          Estoque_Minimo: data.produto.estoque_minimo || "",
          Estoque_Maximo: data.produto.estoque_maximo || "",
        });
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  };

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
    console.log("Resultado do envio:", result);
    alert("Produto salvo com sucesso!");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Cadastro Completo</h1>

        {/* Campo de busca + botão */}
        <div className="flex gap-4">
          <input
            type="text"
            name="id_product"
            value={idProduto}
            onChange={(e) => setIdProduto(e.target.value)}
            placeholder="ID do Produto"
            className="border px-4 py-2 rounded"
          />
          <button
            onClick={Produto}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Buscar
          </button>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium capitalize mb-1">
                {key.replaceAll("_", " ")}
              </label>
              <input
                name={key}
                value={value}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded font-semibold"
          >
            Salvar Produto
          </button>
        </form>
      </div>
    </div>
  );
}
