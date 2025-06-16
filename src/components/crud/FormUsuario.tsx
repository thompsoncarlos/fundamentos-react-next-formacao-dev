import Usuario from "@/data/model/Usuario";
import React from "react";

export interface FormUsuarioProps {
  usuario: Partial<Usuario>;
  alterarUsuario: (usuario: Partial<Usuario>) => void;
  salvar: () => void;
  cancelar: () => void;
}

export default function FormUsuario(props: FormUsuarioProps) {
  const { usuario, alterarUsuario, salvar, cancelar } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span>Nome</span>
        <input
          type="text"
          value={props.usuario.nome ?? ""}
          className="input"
          onChange={(e) => alterarUsuario({ ...usuario, nome: e.target.value })} // Clone de usuário com a última alteracao do campo nome
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <span>Email</span>
          <input
            type="text"
            value={props.usuario.email ?? ""}
            className="input"
            onChange={(e) =>
              alterarUsuario({ ...usuario, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>Senha</span>
          <input
            type="text"
            value={props.usuario.senha ?? ""}
            className="input"
            onChange={(e) =>
              alterarUsuario({ ...usuario, senha: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button className="botao azul" onClick={salvar}>
          Salvar
        </button>
        <button className="botao cinza" onClick={cancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
