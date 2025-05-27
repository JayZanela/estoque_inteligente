import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FormularioProduto() {
  console.log("FormularioProduto");

  const router = useRouter();

  const [formData, setFormData] = useState({
    Preco_Custo: "",
    Preco_Venda: "",
    Peso_Unitario: "",
    Volume_Fisico: "",
    Estoque_Minimo: "",
    Estoque_Maximo: "",
  });

  useEffect(() => {
    if (router.isReady) {
      const query = router.query;

      // Populando o form com os dados da query
      setFormData({
        Preco_Custo: query.preco_custo || "",
        Preco_Venda: query.preco_venda || "",
        Peso_Unitario: query.peso_unitario || "",
        Volume_Fisico: query.volume_fisico || "",
        Estoque_Minimo: query.estoque_minimo || "",
        Estoque_Maximo: query.estoque_maximo || "",
      });
    }
  }, [router.isReady, router.query]);

  console.log("( formularioProduto )router pos validacao:", router);

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
    <div>
      <h1 className="text-2xl font-bold mb-4">Cadastro de Produto</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-screen flex-col gap-4"
      >
        {Object.keys(formData).map((key) => (
          <div key={key} className="w-full max-w-md">
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
    </div>
  );
}
