import axios from "axios";

export const api = axios.create({
  baseURL: "https://farmacia-jk1x.onrender.com"
});

// GET (buscar lista)
export async function buscar(caminho: string, setDados: Function) {
  const resposta = await api.get(caminho);
  setDados(resposta.data);
}

// GET (buscar por id)
export async function buscarPorId(caminho: string, setDados: Function) {
  const resposta = await api.get(caminho);
  setDados(resposta.data);
}

// POST (cadastrar)
export async function cadastrar(caminho: string, dados: any, setDados: Function) {
  const resposta = await api.post(caminho, dados);
  setDados(resposta.data);
}

// PUT (atualizar)
export async function atualizar(caminho: string, dados: any, setDados: Function) {
  const resposta = await api.put(caminho, dados);
  setDados(resposta.data);
}

// DELETE (deletar)
export async function deletar(caminho: string) {
  await api.delete(caminho);
}
