import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, cadastrar, atualizar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categoria, setCategoria] = useState<Categoria>({
    id: undefined,
    tipo: ""
  });

  // Carregar categoria se for edição
  async function carregarCategoria() {
    if (id) {
      await buscar(`/categorias/${id}`, setCategoria);
    }
  }

  useEffect(() => {
    carregarCategoria();
  }, [id]);

  // Atualizar estado ao digitar
  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }

  // Enviar formulário
  async function enviarFormulario(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (id) {
        // EDITAR
        await atualizar(`/categorias/${id}`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } else {
        // CADASTRAR
        await cadastrar("/categorias", categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
      }

      navigate("/categorias");
    } catch (error) {
      alert("Erro ao salvar categoria.");
      console.error(error);
    }
  }

  return (
    <div className="container mx-auto max-w-lg mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-[#146C60] mb-6">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h2>

      <form onSubmit={enviarFormulario} className="flex flex-col gap-4">

        <label className="font-semibold text-lg">Tipo da categoria:</label>
        <input
          type="text"
          name="tipo"
          value={categoria.tipo}
          onChange={atualizarEstado}
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Digite o nome da categoria"
          required
        />

        <button
          type="submit"
          className="bg-[#146C60] hover:bg-[#0f5046] text-white p-2 rounded-md text-lg"
        >
          {id ? "Salvar Alterações" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
