import Link from "next/link";

export interface MenuItemProps {
  link: string;
  texto: string;
  icone?: React.ReactNode;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.link}
      className=" flex gap-2 items-center px-4 py-2 rounded-md hover:bg-white/10"
    >
      {props.icone}
      <span>{props.texto}</span>
    </Link>
  );
}
