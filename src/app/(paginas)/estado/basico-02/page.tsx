import Formulario from "@/components/estado/Formulario";
import Titulo from "@/components/template/Titulo";

export default function EstadoBasico02() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Usando Estado #02"
        secundario="Exemplo de gerenciamento de estado com React"
      />
      <div className="flex flex-col gap-10">
        <Formulario />
      </div>
    </div>
  );
}
