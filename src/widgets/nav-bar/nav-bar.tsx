import { NavLink } from 'react-router-dom'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import { MenuList, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import style from "./nav-bar.module.css"
import React from 'react';

const menuLinks = [
  { id: 1, href: '/events', text: 'События', icon: <AutoGraphIcon fontSize="small" /> },
  { id: 2, href: '/dictionary', text: 'Справочник', icon: <AutoStoriesIcon fontSize="small" /> },
]

export const Navbar = () => {

  return (
    <MenuList>
      {menuLinks.map((link) => (
        <NavLink to={`${link.href}`} key={link.id}
          className={({ isActive, isPending }) =>
            isActive ? style.sidebar__navLink_active : isPending ? "" : style.sidebar__navLink}>
          <MenuItem sx={{ width: "100%" }}><ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText >{link.text}</ListItemText></MenuItem>
        </NavLink>
      ))}
    </MenuList>
  );
};
