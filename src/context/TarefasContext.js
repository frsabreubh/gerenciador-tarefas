import React, { createContext, useReducer, useContext } from "react";

const TarefasContext = createContext();

const initialState = {
  tarefas: [],
  filtro: "TODAS",
};

function tarefasReducer(state, action) {
  switch (action.type) {
    case "ADICIONAR_TAREFA":
      return {
        ...state,
        tarefas: [...state.tarefas, { id: Date.now(), nome: action.payload, concluida: false }],
      };
    case "TOGGLE_TAREFA":
      return {
        ...state,
        tarefas: state.tarefas.map((t) =>
          t.id === action.payload ? { ...t, concluida: !t.concluida } : t
        ),
      };
    case "SET_FILTRO":
      return { ...state, filtro: action.payload };
    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(tarefasReducer, initialState);
  return <TarefasContext.Provider value={{ state, dispatch }}>{children}</TarefasContext.Provider>;
}

export function useTarefas() {
  return useContext(TarefasContext);
}
