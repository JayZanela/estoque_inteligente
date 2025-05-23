import { useRouter } from "next/router";

export default function Posições() {
  const router = useRouter();

  const handleVoltar = () => {
    router.push("/estoque");
  };

  return (
    <div>
      <h2>Posições de Estoque</h2>
      <p>Conteúdo da página de posições de estoque.</p>
    </div>
  );
}
