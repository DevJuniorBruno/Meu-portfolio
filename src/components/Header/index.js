import './header.css'
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/logo.png';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="navbar">
            <span className='spanLogo'><Link to="/" ><img className='nav_logo' to='/' src={ Logo } alt="logo-restaurante" />BRUNO ROSA</Link> </span>
            <div className={`nav_links ${isOpen && "open"}`}>
                <Link to='/'>HOME</Link>
                <Link to='about'>ABOUT</Link>
                <Link to='projects'>PROJECTS</Link>
                <Link to="contato">CONTACTS</Link>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} 
            onClick={()=>setIsOpen(!isOpen)} 
            >
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Header;