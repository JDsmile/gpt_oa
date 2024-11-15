import { NavLink } from "react-router-dom";
import oaList from "../oaList";

const MainList = () => {
  return (
    <ul>
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
