import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormularioProduto from "../components/cadastros_fiscais";
import Header from "../components/header";

export default function HomeItemPage() {
  const router = useRouter();
  const [dadosIniciais, setDadosIniciais] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setDadosIniciais(router.query); // passa tudo da query como props
    }
  }, [router.isReady, router.query]);

  if (!router.isReady) return <p>Carregando...</p>;

  return (
    <>
      <Header />

      <div>
        <h2 className="text-center mb-4">Cadastro de Produto</h2>
        {dadosIniciais?.componente === "fiscalizacao" && (
          <FormularioProduto dadosIniciais={dadosIniciais} />
        )}
        {/* Aqui pode renderizar outros componentes baseados no componente */}
      </div>
    </>
  );
}
