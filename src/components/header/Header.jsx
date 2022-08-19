import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './styles/style.scss';

export const Header = () => {
  return (
    <header>
        <div className="menu">
            <img src="./assets/menu.png" alt="" className="menu_icons" />
            <ul>
            <li><a href="/">notre carte</a> </li>
            <li><a href="/">le coin famille</a> </li>
            <li><a href="/">recrutez-nous!</a> </li>
            <li><a href="/">burger kara</a> </li>
        </ul>
        </div>
        <img src="./assets/burger-king.png" alt="" className='icon'/>

        <div className="header-left">
         <FontAwesomeIcon icon="fa-solid fa-location-dot" className='icon-right' />
         
         <div className="crow">
            <FontAwesomeIcon icon="fa-solid fa-crown"  className='icon-right' />

         <div className="subMenu">
            <button className='seConnecter'>se connecter</button>
            <hr />
            <p>vous n'avez pas encore de compte ?</p>

            <button className='rejoindre'>rejoignez le kingdom</button>
         </div>
         </div>
         


         <button><span>click & colelct</span> <img src="./assets/click_collect.png" alt="" className='btn-icon' /></button>
        </div>
    </header>
  )
}
