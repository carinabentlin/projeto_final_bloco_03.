import { useEffect, useState } from "react";
import type Produto from "../../../models/Produto";

import CardProdutos from "../cardprodutos/CardProdutos";
import { buscar } from "../../../services/Service";

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    buscar("/produtos", setProdutos);
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {produtos.map((produto) => (
        <CardProdutos key={produto.id} produto={produto} />
      ))}
    </section>
  );
}
