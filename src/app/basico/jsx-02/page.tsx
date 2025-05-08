export default function ExemploJSX2() {
  function renderizarCirculo(texto: string) {
    return <div className="bg-red-500 rounded-full">{texto}</div>;
  }

  return (
    <div>
      <h1>Entendendo JSX #02</h1>
      <div>
        {renderizarCirculo("#01")}
        {renderizarCirculo("#02")}
        {renderizarCirculo("#03")}
      </div>
    </div>
  );
}
