export interface MenuLabelProps {
  children?: any;
}

export default function MenuLabel(props: MenuLabelProps) {
  return (
    <span className="text-sm uppercase text-zinc-500 p-4">
      {props.children}
    </span>
  );
}
