import React from "react";
import Tarefa from "./Tarefa";
import { useTarefas } from "../context/TarefasContext";

export default function ListaDeTarefas() {
  const { state } = useTarefas();
  const tarefasFiltradas = state.tarefas.filter((t) => {
    if (state.filtro === "CONCLUIDAS") return t.concluida;
    if (state.filtro === "PENDENTES") return !t.concluida;
    return true;
  });

  return (
    <div className="lista">
      {tarefasFiltradas.length === 0 ? (
        <p style={{ padding: 15, textAlign: "center", color: "gray" }}>Nenhuma tarefa encontrada</p>
      ) : (
        tarefasFiltradas.map((tarefa) => <Tarefa key={tarefa.id} tarefa={tarefa} />)
      )}
    </div>
  );
}
