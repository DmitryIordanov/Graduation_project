import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../Button/MyButton";
import {AuthContext, AuthCreatePost} from "../../../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div className="logo"><Link to="/">МійДиплом</Link></div>
            <div className="navbar__items">
                <Link to="/">Головна</Link>
                <Link to="/posts">Блог</Link>
                <Link to="/about">Про нас</Link>
            </div>
            <div className='Trash__block'>
                <Link to="/trash"><FontAwesomeIcon icon={faTrash} size='lg'/></Link>
            </div>
            {isAuth
                ?<MyButton style={{display: 'none'}} onClick={logout}>Вийти</MyButton>
                :null
            }
        </div>
    );
};

export default Navbar;
