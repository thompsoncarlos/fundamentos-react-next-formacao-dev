import React from "react";

export default function LadoDireito() {
  return (
    <div className="flex-1 flex flex-col gap-10 bg-blue-600 p-8 rounded-xl">
      <span className="text-3xl font-bold">Ações</span>
      <div className="flex gap-3">
        <button className="botao vermelho">Incremento</button>
        <button className="botao vermelho">Decremento</button>
      </div>
    </div>
  );
}
