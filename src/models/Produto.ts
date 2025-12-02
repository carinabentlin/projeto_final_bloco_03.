import type Categoria from "./Categoria";

export default interface Produto {
  id: number | null;
  nome: string;
  foto: string;
  descricao: string;
  preco: number;
  categoria: Categoria | null;
}
