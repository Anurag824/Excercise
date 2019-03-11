import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props);
  return (
    <nav className='nav-wrapper blue darken-4'>
    <a href='/' className='brand-logo left'>React Demo App</a>
    <ul className='right'>
        <li><Link to='/'>Home</Link></li>
      <li><NavLink to='/Info'>Info</NavLink></li>
    </ul>
    </nav>
  )
}

export default withRouter(Navbar);
