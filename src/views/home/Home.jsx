import React from 'react'
import { Header } from '../../components/header/Header'

import './styles/style.scss'

export const Home = () => {
  return (
    <>
        <div className="header">
            <Header />
        </div>
        <section className="heros">
            <button><span>découvrez-le</span></button>
        </section>
    </>
  )
}
