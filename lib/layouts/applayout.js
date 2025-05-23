import Header from "../../pages/components/header"; // Corrigido!

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
