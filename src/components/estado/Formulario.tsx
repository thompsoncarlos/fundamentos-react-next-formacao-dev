"use client";
import { useState } from "react";

export default function Formulario() {
  let nomeUsuario = "Thompson";
  const [nome, setNome] = useState(nomeUsuario);

  return (
    <div className="flex flex-col gap-4">
      <label>
        {nome} | {nomeUsuario}{" "}
      </label>
      <input
        type="text"
        className="input"
        placeholder="Informe seu nome"
        value={nome}
        onChange={(e) => {
          nomeUsuario = e.target.value;
          setNome(e.target.value);
        }}
      />
      <button className="botao azul" onClick={() => setNome("Carlos")}>
        Alterar
      </button>
    </div>
  );
}
