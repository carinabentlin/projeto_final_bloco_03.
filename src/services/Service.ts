import axios from "axios";

const proxy = "https://corsproxy.io/?";

const apiBase = "https://farmacia-jk1x.onrender.com";

export const api = axios.create({
  baseURL: proxy + apiBase
});

// GET
export async function buscar(caminho: string, setDados: Function) {
  const resposta = await api.get(caminho);
  setDados(resposta.data);
}

// POST
export async function cadastrar(caminho: string, dados: any, setDados: Function) {
  const resposta = await api.post(caminho, dados);
  setDados(resposta.data);
}

// PUT
export async function atualizar(caminho: string, dados: any, setDados: Function) {
  const resposta = await api.put(caminho, dados);
  setDados(resposta.data);
}

// DELETE
export async function deletar(caminho: string) {
  await api.delete(caminho);
}
