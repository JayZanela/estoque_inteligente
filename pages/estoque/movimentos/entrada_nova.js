import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/pages/components/loading";
import CadastroEntradaEstoque from "@/pages/components/cadastro_entrada_estoque";

export default function MinhaPagina() {
  const router = useRouter();
  const [idProduto, setIdProduto] = useState(null);

  useEffect(() => {
    if (router.isReady && typeof router.query.id_produto === "string") {
      setIdProduto(router.query.id_produto);
    }
  }, [router.isReady, router.query.id_produto]);

  if (!idProduto) return <Loading />;

  return <CadastroEntradaEstoque produto={idProduto} ocupacao_entrada={{}} />;
}
