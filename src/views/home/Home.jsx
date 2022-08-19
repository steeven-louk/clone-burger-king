import React, { useState } from 'react'
import Card1 from '../../components/card/Card1'
import { Header } from '../../components/header/Header'
import Chaud from '../../data'

import './styles/style.scss'

export const Home = () => {

 const [chaudSection] = useState(Chaud);

//    console.log('chaud', chaudSection);

  return (
    <>
        <div className="header">
            <Header />
        </div>
        <section className="heros">
            <button><span>découvrez-le</span></button>
        </section>

        <section className="chaudBouillant">
            <div className="title">
                <h1>chaud bouillant !</h1>
                <p>Découvrez les actualités Burger King®</p>
            </div>

            <div className="chaudBouillant__card">
                {chaudSection?.map((item, index) =>(
                     <Card1 item={item} index={index}/>
            ))} 
            </div>
            
            
           
        </section>
    </>
  )
}
