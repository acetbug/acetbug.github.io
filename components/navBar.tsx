import NavItem from "./navItem";

export default function NavBar({ translateX, width }: NavBarProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: width,
        height: "100%",
        transform: `translateX(${translateX})`,
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backdropFilter: "blur(10px)",
      }}
    >
      <NavItem label={"Blogs"} />
      <NavItem label={"Projects"} />
      <NavItem label={"Tech stacks"} />
      <NavItem label={"Friends"} />
      <NavItem label={"About me"} />
    </div>
  );
}

interface NavBarProps {
  translateX: string;
  width: string;
}
