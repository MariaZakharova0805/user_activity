import './app.css'
import { Outlet } from "react-router-dom";
import { Navbar } from '../widgets/nav-bar';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1}>
        <Navbar />
      </Grid>
      <Grid item xs={11}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default App
