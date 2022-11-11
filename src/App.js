import "./styles.css";
import Navbar from "./Navbar.js";
import Event from "./Event.js";
import data from "./data.js";
export default function App() {
  const locations = data.map((item) => <Event item={item} />);

  return (
    <div>
      <Navbar />
      {locations}
    </div>
  );
}
