import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './styles/style.scss';

export const Header = () => {
  return (
    <header>
        <div className="menu">
            <img src="./assets/menu.png" alt="" className="menu_icons" />
            <ul>
            <li>notre carte</li>
            <li>le coin famille</li>
            <li>recrutez-nous!</li>
            <li>burger kara</li>
        </ul>
        </div>
        <img src="./assets/burger-king.png" alt="" className='icon'/>

        <div className="header-left">
         <FontAwesomeIcon icon="fa-solid fa-location-dot" className='icon-right' />
         <FontAwesomeIcon icon="fa-solid fa-crown"  className='icon-right'/>

         <button><span>click & colelct</span> <img src="./assets/click_collect.png" alt="" className='btn-icon' /></button>
        </div>
    </header>
  )
}
