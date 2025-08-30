import React, { useState } from "react";
import { TarefasProvider, useTarefas } from "./context/TarefasContext";
import ListaDeTarefas from "./components/ListaDeTarefas";
import "./index.css";

function Conteudo() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const { dispatch } = useTarefas();

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    dispatch({ type: "ADICIONAR_TAREFA", payload: novaTarefa });
    setNovaTarefa("");
  };

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>
      <div className="input-area">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <div className="filtros">
        <button onClick={() => dispatch({ type: "SET_FILTRO", payload: "TODAS" })}>Todas</button>
        <button onClick={() => dispatch({ type: "SET_FILTRO", payload: "CONCLUIDAS" })}>Concluídas</button>
        <button onClick={() => dispatch({ type: "SET_FILTRO", payload: "PENDENTES" })}>Pendentes</button>
      </div>
      <ListaDeTarefas />
    </div>
  );
}

export default function App() {
  return (
    <TarefasProvider>
      <Conteudo />
    </TarefasProvider>
  );
}
