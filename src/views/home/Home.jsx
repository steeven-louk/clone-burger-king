import React, { useState } from "react";

import Card1 from "../../components/card/Card1";
import Card2 from "../../components/card/Card2";

import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

import { Chaud, Faim } from "../../data";

import "./styles/style.scss";

export const Home = () => {

  const [chaudSection] = useState(Chaud);
  const [faimSection] = useState(Faim);

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <section className="heros">
        <button>
          <span>découvrez-le</span>
        </button>
      </section>

      <section className="container__card">
        <div className="title">
          <h1>chaud bouillant !</h1>
          <p>Découvrez les actualités Burger King®</p>
        </div>

        <div className="card">
          {chaudSection?.map((item, index) => (
            <Card1 item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="kingdomAvantage">
        <div className="container">
          <div className="img1">
            <img src="./assets/img5.png" alt="" />

            <button>
              <span>rejoindre le king</span>
            </button>
          </div>
          <div className="img2">
            <img src="./assets/img6.png" alt="" className="img-center" />
          </div>
          <div className="img3">
            <img src="./assets/img7.png" alt="" />
            <button>
              <span>voir tous les avantages</span>
            </button>
          </div>
        </div>
      </section>

      <section className="container__card">
        <div className="title">
          <h1>UNE PETITE OU UNE GROSSE FAIM ? 🍔</h1>
        </div>

        <div className="card">
          {faimSection?.map((item, index) => (
            <Card2 item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="footer">
        <Footer />
      </section>

    </>
  );
};
