import type Categoria from "./Categoria";

export default interface Produto {
  id?: number;
  nome: string;
  preco: number | string;
  foto: string;
  categoria: Categoria;
}
