import React from 'react';
import '../app.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header-nav'>
            <ul>
                <NavLink to={"/"} style={{ textDecoration: 'none' }}><li>ShowTodo</li></NavLink>
                <NavLink to={"/new-todo"} style={{ textDecoration: 'none' }}><li>NewTodo</li></NavLink>

            </ul>
        </nav>
    )
}

export default Header
