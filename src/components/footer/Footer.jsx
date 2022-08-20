import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/style.scss';


export const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer__container">
               <div className="footer__top">
                    <h2>Qui nous aime, nous suive !</h2>
                    <div className="social-icon">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" className='icon-social' />
                        <FontAwesomeIcon icon="fa-brands fa-instagram" className='icon-social' />
                        <FontAwesomeIcon icon="fa-brands fa-twitter" className='icon-social' />
                    </div>
                    <div className="store">
                        <h2>Le King dans la poche</h2>
                        <img src="./assets/app_store.png" alt=""/>
                        <img src="./assets/app_store.png" alt=""/>
                    </div>
                    
               </div>

               <hr />

               <div className="menu-container">
                    <div className="menu-footer">
                        <h2>produits</h2>
                        <ul>
                            <li><a href="/" className="nav-link">Catalogue produits</a></li>
                            <li><a href="/" className="nav-link">Nos burgers</a></li>
                            <li><a href="/" className="nav-link">Nos menus</a></li>
                        </ul>
                    </div>
                    <div className="menu-footer">
                        <h2>famille</h2>
                        <ul>
                            <li><a href="/" className="nav-link">Offre famille</a></li>
                            <li><a href="/" className="nav-link">King's Birthday</a></li>
                            <li><a href="/" className="nav-link">Menus enfants</a></li>
                        </ul>
                    </div>
                    <div className="menu-footer">
                        <h2>service conso</h2>
                        <ul>
                            <li><a href="/" className="nav-link">Besoin de parler ?</a></li>
                            <li><a href="/" className="nav-link">FAQ</a></li>
                            <li><a href="/" className="nav-link">Burger King vous écoute !</a></li>
                        </ul>
                    </div>
                    <div className="menu-footer">
                        <h2>informations légales</h2>
                        <ul>
                            <li><a href="/" className="nav-link">Mentions légales</a></li>
                            <li><a href="/" className="nav-link">CGV</a></li>
                            <li><a href="/" className="nav-link">Politique de protection des données personnelles</a></li>
                            <li><a href="/" className="nav-link">Cookies</a></li>
                        </ul>
                    </div>
                    <div className="menu-footer">
                        <h2>l'entreprise</h2>
                        <ul>
                            <li><a href="/" className="nav-link">histoire</a></li>
                            <li><a href="/" className="nav-link">devenir franchisé</a></li>
                            <li><a href="/" className="nav-link">recrutement</a></li>
                            <li><a href="/" className="nav-link">investisseurs</a></li>
                            <li><a href="/" className="nav-link">Burger Kare</a></li>
                            <li><a href="/" className="nav-link">Communiqué de presse</a></li>
                        </ul>
                    </div>
               </div>
               <hr />
            </div>
        </footer>
    </>
  )
}
