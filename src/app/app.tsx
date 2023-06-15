import './app.css'
import { Outlet } from "react-router-dom";
import { Navbar } from 'widgets/nav-bar';
import ResponsiveDrawer from 'widgets/drawer/drawer';

function App() {
  return (
    <ResponsiveDrawer Navbar={<Navbar />} Outlet={<Outlet />} />
  );
}

export default App
