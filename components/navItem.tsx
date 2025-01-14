import MyLink from "./myLink";

export default function NavItem({ label }: NavItemProps) {
  const href = `/${label.toLowerCase().replaceAll(" ", "-")}`;
  return <MyLink href={href}>{label}</MyLink>;
}

interface NavItemProps {
  label: string;
}
