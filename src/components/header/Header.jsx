import React from 'react';
import css from './Header.module.css';
import logo from '../../assets/logo.png';
import {CgShoppingBag} from 'react-icons/cg';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt=""/>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                    <li><Link to="/Brands">Brands</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
                </ul>
            </div>
            <input type="text" className ={css.search} placeholder="Search"/>
            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default Header
