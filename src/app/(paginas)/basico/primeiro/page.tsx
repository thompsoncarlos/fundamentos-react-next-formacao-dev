export default function PrimeiraComponent() {
  return (
    <div className="flex flex-col gap-3 p-8">
      <div>
        <h1 className="text-3xl font-black">Primeiro Componente</h1>
        <p className="text-sm text-zinc-400">Subtítulo</p>
      </div>
      <div>
        <span>Conteúdo</span>
      </div>
      <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 self-start">
        Salvar
      </button>
    </div>
  );
}
