import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MovimentosPage() {
  const router = useRouter();

  const handleVoltar = () => {
    router.push("/estoque");
  };

  return (
    <>
      <h1 className="text-center mb-4">Movimentos de Estoque</h1>
      <div className="text-center mb-4">
        <button className="btn btn-secondary" onClick={handleVoltar}>
          Voltar
        </button>
      </div>
      <p>Selecione uma opção no menu lateral.</p>
    </>
  );
}
