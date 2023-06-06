import { NavLink } from "react-router-dom";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const menuLinks = [
  { id: 1, href: `/events`, text: "События", icon: <AutoGraphIcon /> },
  { id: 2, href: `/dictionary`, text: "Справочник", icon: <AutoStoriesIcon /> },
]

export const Navbar = () => {
  return (
    <div>
      <h3>Отчеты:</h3>
      <ul>
        {menuLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              to={`${link.href}`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar__navLink_active"
                  : isPending
                    ? ""
                    : "sidebar__navLink"
              }
            ><div>{link.icon} {link.text}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
