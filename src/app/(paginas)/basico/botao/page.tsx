"use client"; // Utilizado por causa do Next.js para indicar que este é um componente do lado do cliente
import Titulo from "@/components/template/Titulo";

export default function ExemploBotao() {
  function executar(texto: string) {
    alert(`A função foi executada com o texto ${texto}!`);
  }
  return (
    <div>
      <Titulo principal="Usando Botão" secundario="Como usar botão com React" />
      <div className="flex gap-3 py-7">
        <button className="botao azul" onClick={() => executar("Bom dia!")}>
          Bom dia
        </button>
        <button className="botao azul" onClick={() => executar("Bom tarde!")}>
          Bom tarde
        </button>
      </div>
    </div>
  );
}
