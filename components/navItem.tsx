import Link from "next/link";

export default function NavItem({ label }: NavItemProps) {
  const href = `/${label.toLowerCase().replaceAll(" ", "-")}`;
  return (
    <Link href={href} style={{ padding: 8 }}>
      {label}
    </Link>
  );
}

interface NavItemProps {
  label: string;
}
