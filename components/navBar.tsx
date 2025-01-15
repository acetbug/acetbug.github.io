import NavItem from "./navItem";

export default function NavBar({ isCompact, isShown }: NavBarProps) {
  const width = isCompact ? "100%" : "200px";
  const left = isShown ? "0" : "-" + width;
  return (
    <div
      style={{
        position: "relative",
        left: left,
        flexGrow: 1,
        width: width,
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
  isCompact: boolean;
  isShown: boolean;
}
