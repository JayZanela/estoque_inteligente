import SubPages from "../../pages/components/list_subpages";
import SubpagesEstoque from "@/lib/data/subPagesEstoque"; // Corrigido!

export default function EstoqueLayout({ children }) {
  const subpages = SubpagesEstoque;
  const subpagesParaHome = subpages.filter((p) => p.mostrarNaHome);
  // const router = useRouter();
  return (
    <>
      <SubPages paginas={subpages} />
      <main>{children}</main>
    </>
  );
}
