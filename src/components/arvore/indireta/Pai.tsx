"use client";
import Filho from "./Filho";
import { useState } from "react";

export default function Pai() {
  const [resposta, setResposta] = useState("???");

  function receberResposta(resposta: string) {
    setResposta(resposta);
  }

  return (
    <div>
      <span className="text-3xl font-bold">Quem descobriu o Brasil?</span>
      <div className="flex gap-2 text-lg">
        <span className="text-zinc-500">Resposta: </span>
        <span>{resposta}</span>
      </div>
      <div className="py-7">
        <Filho
          opcoes={["Pedro Álvares Cabral", "Índios", "Cristovão Colombo"]}
          opcaoSelecionada={receberResposta}
        />
      </div>
    </div>
  );
}
