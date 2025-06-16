export interface AreaLateralProps {
  children: any;
}

export default function AreaLateral(props: AreaLateralProps) {
  return (
    <aside className="border-r border-zync-800 w-80 p-6">
      {props.children}
    </aside>
  );
}
