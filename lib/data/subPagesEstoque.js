const subpagesEstoque = [
  {
    nome: "Página Inicial",
    rota: "/estoque/home",
    mostrarNaHome: false,
  },
  {
    nome: "Cadastro Produtos",
    rota: "/estoque/cadastro",
    descricao: "Adicione e atualize informações dos produtos armazenados.",
    mostrarNaHome: true,
  },
  {
    nome: "Ocupações por Endereço",
    rota: "/estoque/galeria_endereco",
    descricao: "Visualize as ocupações por endereço.",
    mostrarNaHome: true,
  },

  {
    nome: "Movimentações",
    rota: "/estoque/movimentacoes",
    descricao: "Acompanhe entradas e saídas de produtos.",
    mostrarNaHome: true,
  },
  {
    nome: "Posições de Estoque",
    rota: "/estoque/posicoes",
    descricao: "Gerencie onde os produtos estão armazenados.",
    mostrarNaHome: true,
  },
];

export default subpagesEstoque;
