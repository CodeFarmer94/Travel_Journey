import "./styles.css";
import { FaGlobeEurope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <span className="icon">
        <FaGlobeEurope />
      </span>
      <h2 className="header">my travel journey.</h2>
    </nav>
  );
}
