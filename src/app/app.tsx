import './app.css'
import { Outlet } from "react-router-dom";
import { Navbar } from '../widgets/nav-bar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
