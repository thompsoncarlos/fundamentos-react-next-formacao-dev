"use client";
import useChuckNorrisJoke from "@/data/hook/useChuckNorrisJoke";

export default function ChuckNorrisJoke() {
  const { piada, obterPiada } = useChuckNorrisJoke();

  return (
    <div className="flex flex-col gap-4 items-start">
      <span className="text-2xl">{piada}</span>
      <button className="botao azul " onClick={obterPiada}>
        Obter Piada
      </button>
    </div>
  );
}
