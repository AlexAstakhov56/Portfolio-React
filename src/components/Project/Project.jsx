import { NavLink } from "react-router-dom";
import "./Project.css";

export default function Project({ title, img, index }) {
  return (
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
}
