import UsandoAPIs from "@/components/estado/UsandoAPIs";
import Titulo from "@/components/template/Titulo";

export default function EstadoBasico04() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Usando UseEffect #02"
        secundario="Exemplo de gerenciamento de estado com React"
      />
      <div className="flex flex-col gap-10">
        <UsandoAPIs />
      </div>
    </div>
  );
}
