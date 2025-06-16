export default function ExemploJSX3() {
  const numero = 10;
  const numeroPar = numero % 2 === 0;

  return (
    <div className="container">
      <div className="exercicio">
        <h1>Entendendo o JSX #03</h1>
        <div className="conteudo">
          {/* IF / ELSE */}
          {numeroPar ? (
            <span className="text-green-500">Par</span>
          ) : (
            <span className="text-red-500">Impar</span>
          )}
          {/* IF */}
          {numeroPar && <span>O resto da divisão por 2 é igual a zero!</span>}
        </div>
      </div>
    </div>
  );
}
