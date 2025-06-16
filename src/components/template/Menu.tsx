export interface MenuProps {
  children: any;
}

export default function Menu(props: MenuProps) {
  return <nav className="flex flex-col">{props.children}</nav>;
}
