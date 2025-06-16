"use client";
import useContador from "@/data/hook/useContador";

export default function LadoEsquerdo() {
  const { contador } = useContador();

  return (
    <div className="flex-1 flex flex-col gap-10 bg-red-600 p-8 rounded-xl">
      <span className="text-3xl font-bold">Valor</span>
      <div className="flex gap-3">
        <span className="text-5xl font-black">{contador}</span>
      </div>
    </div>
  );
}
