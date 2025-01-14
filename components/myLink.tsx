import Link from "next/link";

export default function MyLink({ href, children }: MyLinkProps) {
  return (
    <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
      {children}
    </Link>
  );
}

interface MyLinkProps {
  href: string;
  children: React.ReactNode;
}
