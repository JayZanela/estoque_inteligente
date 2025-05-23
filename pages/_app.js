// pages/_app.js
import AppLayout from "@/lib/layouts/applayout";
import EstoqueLayout from "@/lib/layouts/estoquelayout";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;

  const isEstoque = path.startsWith("/estoque");

  const Layout = isEstoque ? EstoqueLayout : AppLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
