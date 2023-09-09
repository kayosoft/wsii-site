import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="main-menu text-center">
            <nav>
                <ul className="main-menu__list">
                <li className='current'><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/about`}>About</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/events`}>Events</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/blog`}>Blog</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/contact`}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;


