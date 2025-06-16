export default function ExemploJSX2() {
  function renderizarCirculo(texto: string) {
    return (
      <div className="flex justify-center items-center h-12 w-12 bg-red-500 rounded-full text-sm">
        {texto}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="exercicio">
        <h1>Entendendo o JSX #02</h1>
        <div className="conteudo">
          <div className="grid grid-cols-3 gap-5">
            {renderizarCirculo("#01")}
            {renderizarCirculo("#02")}
            {renderizarCirculo("#03")}
            {renderizarCirculo("#04")}
            {renderizarCirculo("#05")}
            {renderizarCirculo("#06")}
            {renderizarCirculo("#07")}
          </div>
        </div>
      </div>
    </div>
  );
}
