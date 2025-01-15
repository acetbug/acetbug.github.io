import HomeIcon from "./homeIcon";

export default function TopBar() {
  return (
    <div
      style={{
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HomeIcon />
    </div>
  );
}
