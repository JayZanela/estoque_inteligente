export const movimentosEstoque = [
  {
    tipo: "entrada",
    descricao: "Entrada de produto no estoque",
  },
  {
    tipo: "saida",
    descricao: "Saída de produto do estoque",
  },
  {
    tipo: "transferencia",
    descricao: "Transferência de produto entre estoques",
  },
];

export const opcoesMovimentosEstoque = [
  {
    tipo: "entrada",
    nome: "Entrada de Produto",
    rota: "/estoque/movimentos/entrada_nova",
    descricao: "Registrar uma nova entrada de produto no estoque.",
  },
  {
    tipo: "saida",
    nome: "Saída de Produto",
    rota: "/estoque/movimentos/saida_nova",
    descricao: "Registrar uma nova saída de produto do estoque.",
  },
  {
    tipo: "transferencia",
    nome: "Transferência de Produto",
    rota: "/estoque/movimentos/transferencia_nova",
    descricao: "Registrar uma transferência de produto entre estoques.",
  },
];

export const camposRequeridosMovimentos = {
  entrada: ["produto", "quantidade", "responsavel", "motivo"],
  saida: ["produto", "quantidade", "responsavel", "motivo"],
  transferencia: [
    "produto",
    "quantidade",
    "responsavel",
    "motivo",
    "estoque_origem",
    "estoque_destino",
  ],
};
