import React from 'react';
import './app.css'
import { Outlet } from "react-router-dom";
import { Navbar } from 'widgets/nav-bar';
import { SelectParams } from 'widgets/select/select';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkTheme } from './styles/darkTheme';

const drawerWidth = 230;
interface Props {
  window?: () => Window;
}

function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen) };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Navbar />
      <Divider />
      <SelectParams />
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "black"
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <Typography variant="h4" component="h3">Отчеты</Typography>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App

//Или вынести в отдельный компонент?
// import ResponsiveDrawer from 'widgets/drawer/drawer';
// function App() {
//   return (
//     <ResponsiveDrawer Navbar={<Navbar />} Outlet={<Outlet />} SelectParams={<SelectParams/>}/>
//   );
// }
