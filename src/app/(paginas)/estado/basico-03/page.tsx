import ChuckNorrisJoke from "@/components/estado/ChuckNorrisJoke";
import Titulo from "@/components/template/Titulo";

export default function EstadoBasico03() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Usando UseEffect #01"
        secundario="Exemplo de gerenciamento de estado com React"
      />
      <div className="flex flex-col gap-10">
        <ChuckNorrisJoke />
      </div>
    </div>
  );
}
