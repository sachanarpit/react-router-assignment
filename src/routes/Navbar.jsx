import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/Products">products</Link>
    </div>
  );
};
