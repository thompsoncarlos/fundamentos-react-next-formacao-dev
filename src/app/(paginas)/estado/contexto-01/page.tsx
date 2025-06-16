import LadoDireito from "@/components/estado/contexto-01/LadoDireito";
import LadoEsquerdo from "@/components/estado/contexto-01/LadoEsquerdo";
import Titulo from "@/components/template/Titulo";

export default function EstadoBasico05() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Usando Context API #01"
        secundario="Exemplo de gerenciamento de estado com React"
      />
      <div className="flex gap-5">
        <LadoEsquerdo />
        <LadoDireito />
      </div>
    </div>
  );
}
