export default function ExemploJSX() {
  const titulo = <h1>Entendento o JSX</h1>;
  return (
    <div className="container">
      <div className="exemplo">
        {titulo}
        <div>
          <span>{7 * 7}</span>
          <span>{Math.random()}</span>
        </div>
      </div>
    </div>
  );
}
