import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <nav>
        <div className='left'>
          <a href='/' className='logo'>
            <img src='/logo.png'/>
            <span>Z Estate</span>
          </a>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
        </div>
        <div className='right'>
          <a href='/'>SignIn</a>
          <a href='/' className='register'>SignUp</a>
          <div className="menuIcon"><img src='/menu.png' alt='menu icon' onClick={()=>setOpen(!open)}/></div>
          <div className={open ? "menu active" : "menu"}>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Agents</a>
            <a href='/'>SignIn</a>
            <a href='/'>SignUp</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar