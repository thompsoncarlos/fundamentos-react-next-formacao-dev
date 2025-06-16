import CadastroUsuario from "@/components/crud/CadastroUsuario";
import Titulo from "@/components/template/Titulo";

export default function Cadastro() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Cadastro de Usuário"
        secundario="Criação, alteração, consultas e exclusão de usuários"
      />
      <CadastroUsuario />
    </div>
  );
}
