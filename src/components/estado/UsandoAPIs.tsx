"use client";
import { useEffect, useState } from "react";

export default function UsandoAPIs() {
  const [url, setUrl] = useState("");
  const [dados, setDados] = useState<any>();

  async function obterDados() {
    try {
      new URL(url);
    } catch {
      setDados({ erro: "URL inválida!" });
      return;
    }

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();
      setDados(dados);
    } catch {
      setDados({ erro: "Erro ao obter dados!" });
    }
  }

  useEffect(() => {
    obterDados();
  }, [url]);

  return (
    <div className="flex flex-colt gap-4 items-start">
      <input
        type="text"
        className="input"
        value={url}
        size={80}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Informe a URL"
      />
      <pre>
        <code>{JSON.stringify(dados, null, 2)}</code>
      </pre>
    </div>
  );
}
