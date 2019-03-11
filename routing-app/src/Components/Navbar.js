import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props);
  // setTimeout(()=>{
  //   props.history.push('./About');
  // }, 2000);
  return (
    <nav className='nav-wrapper blue darken-4'>
    <a href='/' className='brand-logo left'> MERN Masters</a>
    <ul className='right'>
        <li><Link to='/'>Home</Link></li>
      <li><NavLink to='/About'>About</NavLink></li>
      <li><NavLink to='/Contact'>Contact</NavLink></li>
    </ul>
    </nav>
  )
}

export default withRouter(Navbar);
