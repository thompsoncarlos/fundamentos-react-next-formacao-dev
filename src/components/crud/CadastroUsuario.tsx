"use client";
import React, { useState } from "react";
import todosOsUsuarios from "@/data/constants/usuarios";
import Usuario from "@/data/model/Usuario";
import ListaUsuarios from "./ListaUsuarios";
import FormUsuario from "./FormUsuario";
import Id from "@/data/model/Id";

export default function CadastroUsuario() {
  const [usuarios, setUsuarios] = useState<Usuario[]>(todosOsUsuarios);
  const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(
    null
  );

  function removerUsuario(usuario: Usuario) {
    const todosMenosUsuarioInformado = usuarios.filter(
      (u) => u.id !== usuario.id
    );
    setUsuarios(todosMenosUsuarioInformado);
  }

  function salvarUsuario() {
    const usuarioExistente = usuarios.find((u) => u.id === usuarioAtual?.id);

    if (usuarioExistente) {
      const novosUsuarios = usuarios.map((u) => {
        return u.id === usuarioAtual?.id ? usuarioAtual : u;
      });
      setUsuarios(novosUsuarios as Usuario[]);
    } else {
      setUsuarios([...usuarios, usuarioAtual as Usuario]);
    }
    setUsuarioAtual(null);
  }

  function selecionarUsuario(usuario: Partial<Usuario>) {
    setUsuarioAtual(usuario);
  }

  function cancelar() {
    setUsuarioAtual(null);
  }

  return (
    <div className="flex flex-col gap-5">
      <button
        className="botao verde self-end"
        onClick={() => selecionarUsuario({ id: Id.novo() })}
      >
        Novo Usuário
      </button>
      {usuarioAtual ? (
        <FormUsuario
          usuario={usuarioAtual}
          cancelar={cancelar}
          alterarUsuario={setUsuarioAtual}
          salvar={salvarUsuario}
        />
      ) : (
        <ListaUsuarios
          usuarios={usuarios}
          removerUsuario={removerUsuario}
          selecionarUsuario={selecionarUsuario}
        />
      )}
    </div>
  );
}
