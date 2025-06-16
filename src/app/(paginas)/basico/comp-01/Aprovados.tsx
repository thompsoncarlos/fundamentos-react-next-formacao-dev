interface AprovadosProps {
  nome: string;
}

export default function Aprovados(props: AprovadosProps) {
  return (
    <div
      key={props.nome}
      className="flex justify-between bg-black p-3 rounded-md"
    >
      <span className="text-zinc-300">{props.nome}</span>
      <div className="flex gap-2">
        <button className="bg-blue-500 p-2 text-sm rounded-md ">Editar</button>
        <button className="bg-red-500 p-2 text-sm rounded-md ">Excluir</button>
      </div>
    </div>
  );
}
