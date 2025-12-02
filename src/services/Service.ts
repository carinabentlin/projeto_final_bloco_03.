import axios from "axios";

const apiBase = "https://farmacia-jk1x.onrender.com";

export const api = axios.create({
  baseURL: apiBase,
});

// GET genérico
export async function buscar(caminho: string, setDados: Function) {
  const resposta = await api.get(caminho);
  setDados(resposta.data);
}

// POST genérico
export async function cadastrar(caminho: string, dados: any, setDados?: Function) {
  const resposta = await api.post(caminho, dados);
  if (setDados) setDados(resposta.data);
}

// PUT genérico
export async function atualizar(caminho: string, dados: any, setDados?: Function) {
  const resposta = await api.put(caminho, dados);
  if (setDados) setDados(resposta.data);
}

// DELETE genérico
export async function deletar(caminho: string) {
  await api.delete(caminho);
}
