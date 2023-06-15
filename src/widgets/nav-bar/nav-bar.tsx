import { NavLink } from 'react-router-dom'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import { MenuList, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import style from "./nav-bar.module.css"

const menuLinks = [
  { id: 1, href: '/events', text: 'События', icon: <AutoGraphIcon fontSize="small" /> },
  { id: 2, href: '/dictionary', text: 'Справочник', icon: <AutoStoriesIcon fontSize="small" /> },
]

export const Navbar = () => {
  return (
    <MenuList>
      {menuLinks.map((link) => (
        <MenuItem key={link.id}>
          <NavLink to={`${link.href}`}
            className={({ isActive, isPending }) =>
              isActive ? style.sidebar__navLink_active : isPending ? "" : style.sidebar__navLink}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText>{link.text}</ListItemText>
          </NavLink>
        </MenuItem>
      ))}
    </MenuList>
  );
};
