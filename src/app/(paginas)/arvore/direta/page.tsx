import Pai from "@/components/arvore/direta/Pai";
import Titulo from "@/components/template/Titulo";

export default function ComunicacaoDireta() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Comunicação Direta"
        secundario="Exemplo de comunicação direta entre componentes"
      />
      <Pai
        nome="João"
        sobrenome="Silva"
        filhos={["Ana", "Roberto", "Lúcia", "Ganbriel"]}
      />
    </div>
  );
}
