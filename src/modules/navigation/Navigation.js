import { NavLink } from 'react-router-dom';
import Menu from "../menu/Menu";
import Box from '@mui/material/Box';

export default function Navigation() {
  return (
    <>
    <nav>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/menu" className="navlink">Menu</NavLink>
      <NavLink to="/waiters" className="navlink">Waiters</NavLink>
      <NavLink to="/tables" className="navlink">Tables</NavLink>
    </nav>
    </>
  )
}
