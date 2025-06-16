"use client";
import { createContext, useState } from "react";

export interface ContextoContadorProps {
  contador: number;
  incrementar: () => void;
  decrementar: () => void;
}

// Contexto -> Dados
const ContextoContador = createContext<ContextoContadorProps>({} as any);

// Provedor -> Distribuir os dados
export function ProvedorContador(props: any) {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <ContextoContador.Provider
      value={{
        contador,
        incrementar,
        decrementar,
      }}
    >
      {props.children}
    </ContextoContador.Provider>
  );
}

export default ContextoContador;
