import { NavLink } from "react-router-dom";
import oaList from "../oaList";
import "./MainList.scss";

const MainList = () => {
  return (
    <ul className="main-list">
      {oaList.map(({ name, link }) => {
        return (
          <li>
            <NavLink to={link}>{name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MainList;
