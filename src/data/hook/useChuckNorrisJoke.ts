"use client";
import { useEffect, useState } from "react";

export default function useChuckNorris() {
  const [piada, setPiada] = useState("Piada...");

  async function obterPiada() {
    const resposta = await fetch("https://api.chucknorris.io/jokes/random");
    const dados = await resposta.json();
    setPiada(dados.value);
  }

  useEffect(() => {
    obterPiada();
  }, []);

  return {
    piada,
    obterPiada,
  };
}
