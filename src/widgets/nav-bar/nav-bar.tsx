import { NavLink } from 'react-router-dom'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import style from "./nav-bar.module.css"

const menuLinks = [
  { id: 1, href: '/events', text: 'События', icon: <AutoGraphIcon fontSize="small" /> },
  { id: 2, href: '/dictionary', text: 'Справочник', icon: <AutoStoriesIcon fontSize="small" /> },
]

export const Navbar = () => {
  return (
    <MenuList>
      <h3>Отчеты:</h3>
      {menuLinks.map((link) => (
        <MenuItem key={link.id}>
          <NavLink
            to={`${link.href}`}
            className={({ isActive, isPending }) =>
              isActive
                ? style.sidebar__navLink_active
                : isPending
                  ? ""
                  : style.sidebar__navLink
            }
          >
            <ListItemIcon color="text.secondary">
              {link.icon}
            </ListItemIcon>
            <ListItemText color="text.secondary">{link.text}</ListItemText>
          </NavLink>
        </MenuItem>
      ))}
    </MenuList>
  );
};
