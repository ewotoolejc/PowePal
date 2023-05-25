import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className='mainnavwrap'>
    <nav className='mainNav'>
      <Link to="/resorts" className='homebtn'>Home</Link>
      &nbsp;&nbsp; 
      <Link to="/add">Add Page</Link>
      &nbsp;&nbsp;
      <span id='userwelcome'>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut} className='logoutbtn'>Log Out</Link>
    </nav>
    </div>
  );
}