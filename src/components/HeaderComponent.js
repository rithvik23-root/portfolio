import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import { useRef } from "react";
import AboutComponent from "./AboutComponent";
export default function HeaderComponent() {
  const targetRef = useRef(null);
  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link item" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link item" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link item" href="/">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link item" href="/">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link item" href="/">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
