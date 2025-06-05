import { prisma } from "./../prisma";

function modeloValido(tabela) {
  return typeof prisma[tabela] === "object";
}

export async function criarDado(tabela, data) {
  try {
    if (!modeloValido(tabela)) throw new Error(`Tabela inválida: ${tabela}`);
    return await prisma[tabela].create({ data });
  } catch (err) {
    console.error(`Erro em criarDado(${tabela}):`, err);
    throw err;
  }
}

export async function buscarDadoUnico(tabela, where) {
  try {
    if (!modeloValido(tabela)) throw new Error(`Tabela inválida: ${tabela}`);
    return await prisma[tabela].findUnique({ where });
  } catch (err) {
    console.error(`Erro em buscarDadoUnico(${tabela}):`, err);
    throw err;
  }
}

export async function buscarPrimeiroDado(tabela, where) {
  try {
    if (!modeloValido(tabela)) throw new Error(`Tabela inválida: ${tabela}`);
    return await prisma[tabela].findFirst({ where });
  } catch (err) {
    console.error(`Erro em buscarPrimeiroDado(${tabela}):`, err);
    throw err;
  }
}

export async function buscarVariosDadosComFiltro(tabela, where) {
  try {
    if (!modeloValido(tabela)) throw new Error(`Tabela inválida: ${tabela}`);
    return await prisma[tabela].findMany({ where });
  } catch (err) {
    console.error(`Erro em buscarVariosDadosComFiltro(${tabela}):`, err);
    throw err;
  }
}

export async function buscarVariosDadosComDetalhes(tabela, where, include) {
  try {
    if (!modeloValido(tabela)) throw new Error(`Tabela inválida: ${tabela}`);
    return await prisma[tabela].findMany({ where, include });
  } catch (err) {
    console.error(`Erro em buscarVariosDadosComFiltro(${tabela}):`, err);
    throw err;
  }
}

export async function buscarTodosOsDados(tabela) {
  try {
    if (!modeloValido(tabela)) throw new Error(`Tabela inválida: ${tabela}`);
    return await prisma[tabela].findMany();
  } catch (err) {
    console.error(`Erro em buscarTodosOsDados(${tabela}):`, err);
    throw err;
  }
}

export async function atualizarDado(tabela, where, data) {
  try {
    if (!modeloValido(tabela)) throw new Error(`Tabela inválida: ${tabela}`);
    return await prisma[tabela].update({ where, data });
  } catch (err) {
    console.error(`Erro em atualizarDado(${tabela}):`, err);
    throw err;
  }
}
