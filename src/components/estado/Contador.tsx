"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export interface ContadorProps {
  valorInicial?: number;
}

// O estado do componente muda a interface gráfica reage a mudança.

export default function Contador(props: ContadorProps) {
  // A forma como o React monitora a mudança de estado é através de Hooks: useState
  const [numero, alterarNumero] = useState(props.valorInicial ?? 0);
  //   const numero = estado[0];
  //   const alterarNumero = estado[1];

  function incrementar() {
    alterarNumero(numero + 1);
  }

  function decrementar() {
    alterarNumero(numero - 1);
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold">Contador</h2>
        <span className="text-6xl font-semibold">{numero}</span>
        <div className="flex gap-3 ">
          <button onClick={incrementar}>
            <IconPlus />
          </button>
          <button onClick={decrementar}>
            <IconMinus />
          </button>
        </div>
      </div>
    </div>
  );
}
