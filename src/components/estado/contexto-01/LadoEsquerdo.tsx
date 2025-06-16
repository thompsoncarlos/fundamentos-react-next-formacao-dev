import React from "react";

export default function LadoEsquerdo() {
  return (
    <div className="flex-1 flex flex-col gap-10 bg-red-600 p-8 rounded-xl">
      <span className="text-3xl font-bold">Valor</span>
      <div className="flex gap-3">
        <span className="text-5xl font-black">100</span>
      </div>
    </div>
  );
}
