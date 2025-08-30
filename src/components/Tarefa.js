import React from "react";
import { useTarefas } from "../context/TarefasContext";

export default function Tarefa({ tarefa }) {
  const { dispatch } = useTarefas();

  return (
    <div className="tarefa">
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => dispatch({ type: "TOGGLE_TAREFA", payload: tarefa.id })}
      />
      <span className={tarefa.concluida ? "concluida" : ""}>{tarefa.nome}</span>
    </div>
  );
}
