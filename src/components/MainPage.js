import sprite from "../images/sprite.svg";
import React from "react";
import img1 from "../images/casual.webp";
import img2 from "../images/sport.webp";
import img3 from "../images/festive.jpeg";
import img4 from "../images/people1.jpg";
import img5 from "../images/people2.jpg";
import img6 from "../images/people3.jpg";
import img7 from "../images/people4.jpg";

import background from "../images/main.jpeg";
import { useState } from "react";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalChange = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <main>
        <section
          className="hero section-padding"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <h1 className="hero__title">
              Shop of brand <br />
              clothes
            </h1>
            <button
              type="button"
              className="hero__button"
              onClick={modalChange}
              data-modal-open
            >
              Order a call
            </button>
          </div>
        </section>

        <section className="features section">
          <div className="container">
            <h2 hidden>Features</h2>
            <ul className="list features__list">
              <li className="features__item">
                <div className="features__photo">
                  <svg className="features__svg">
                    <use href={`${sprite}#antenna`}></use>
                  </svg>
                </div>
                <h3 className="features__header">Attention to details</h3>
                <p className="features__text">
                  We are very attentive to customers
                </p>
              </li>
              <li className="features__item">
                <div className="features__photo">
                  <svg className="features__svg">
                    <use href={`${sprite}#clock`}></use>
                  </svg>
                </div>
                <h3 className="features__header">High quality</h3>
                <p className="features__text">Our clothes is very good.</p>
              </li>
              <li className="features__item">
                <div className="features__photo">
                  <svg className="features__svg">
                    <use href={`${sprite}#diagram`}></use>
                  </svg>
                </div>
                <h3 className="features__header">Big variety</h3>
                <p className="features__text">We have all what you want</p>
              </li>
              <li className="features__item">
                <div className="features__photo">
                  <svg className="features__svg">
                    <use href={`${sprite}#astronaut`}></use>
                  </svg>
                </div>
                <h3 className="features__header">Fast delivery </h3>
                <p className="features__text">
                  We deliver the parcel to you in one day
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="occupation section-bottom">
          <div className="container">
            <h2 className="occupation__header header">
              What clothes you have?
            </h2>
            <ul className="list occupation__list">
              <li className="occupation__item">
                <img src={`${img1}`} width="370" />
                <p className="occupation__text">Casual clothes</p>
              </li>
              <li className="occupation__item">
                <img src={`${img2}`} width="370" />
                <p className="occupation__text">Sport clothes</p>
              </li>
              <li className="occupation__item">
                <img src={`${img3}`} width="370" />
                <p className="occupation__text">Festive clothes</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="team section">
          <div className="container">
            <h2 className="header team__header">Our founders</h2>
            <ul className="list team__list">
              <li className="team__icon">
                <img
                  src={`${img4}`}
                  alt="Игорь Демьяненко Product Designer"
                  className="team__img"
                />

                <div className="team__content">
                  <h3 className="team__name">Ihor Clas</h3>
                  <p lang="en" className="team__text">
                    Product Designer
                  </p>

                  <ul className="team-soc">
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#instagram`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#twitter`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#facebook`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#linkedin`}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="team__icon">
                <img
                  src={`${img5}`}
                  alt="Ольга Репина Frontend Developer"
                  className="team__img"
                />
                <div className="team__content">
                  <h3 className="team__name">Olga Rulkina</h3>
                  <p lang="en" className="team__text">
                    Manager
                  </p>
                  <ul className="team-soc">
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#instagram`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#twitter`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#facebook`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#linkedin`}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="team__icon">
                <img
                  src={`${img6}`}
                  alt="Николай Тарасов Marketing"
                  className="team__img"
                />
                <div className="team__content">
                  <h3 className="team__name">Nikola Wait</h3>
                  <p lang="en" className="team__text">
                    Marketing
                  </p>
                  <ul className="team-soc">
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#instagram`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#twitter`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#facebook`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#linkedin`}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="team__icon">
                <img
                  src={`${img7}`}
                  alt=" Михаил ЕрмаковUI Designer"
                  className="team__img"
                />
                <div className="team__content">
                  <h3 className="team__name">Michail</h3>
                  <p lang="en" className="team__text">
                    UI Designer
                  </p>
                  <ul className="team-soc">
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#instagram`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#twitter`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#facebook`}></use>
                        </svg>
                      </a>
                    </li>
                    <li className="list team-soc__item">
                      <a href="" className="team-soc__link link">
                        <svg className="team-soc__svg">
                          <use href={`${sprite}#linkedin`}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="clients section">
          <div className="container">
            <h2 className="clients__title">Our partners</h2>
            <ul className="clients__list">
              <li className="clients__item list">
                <a href="" className="clients__link link">
                  <svg className="clients__svg">
                    <use href={`${sprite}#group-5`}></use>
                  </svg>
                </a>
              </li>

              <li className="clients__item list">
                <a href="" className="clients__link link">
                  <svg className="clients__svg">
                    <use href={`${sprite}#group-1`}></use>
                  </svg>
                </a>
              </li>

              <li className="clients__item list">
                <a href="" className="clients__link link">
                  <svg className="clients__svg">
                    <use href={`${sprite}#group-4`}></use>
                  </svg>
                </a>
              </li>

              <li className="clients__item list">
                <a href="" className="clients__link link">
                  <svg className="clients__svg">
                    <use href={`${sprite}#group-2`}></use>
                  </svg>
                </a>
              </li>

              <li className="clients__item list">
                <a href="" className="clients__link link">
                  <svg className="clients__svg">
                    <use href={`${sprite}#group-3`}></use>
                  </svg>
                </a>
              </li>

              <li className="clients__item list">
                <a href="" className="clients__link link">
                  <svg className="clients__svg">
                    <use href={`${sprite}#group-6`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {showModal && (
        <div className="backdrop " data-modal>
          <div className="modal">
            <button
              className="backdrop__button"
              onClick={modalChange}
              type="button"
              data-modal-close
            >
              <svg className="backdrop__close">
                <use href={`${sprite}#icon-cross`}></use>
              </svg>
            </button>

            <form className="form">
              <b className="form__header">
                Leave your data and we will call you
              </b>
              <div className="form__field">
                <label for="name" className="form__label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="form__input"
                />
                <svg className="form__icon form__icon--3">
                  <use href="./images/sprite.svg#form-3"></use>
                </svg>
              </div>

              <div className="form__field">
                <label for="tel" className="form__label">
                  Phone
                </label>
                <input name="tel" type="tel" id="tel" className="form__input" />
                <svg className="form__icon form__icon--1">
                  <use href="./images/sprite.svg#form-1"></use>
                </svg>
              </div>

              <div className="form__field">
                <label for="email" className="form__label">
                  Mail
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="form__input"
                />
                <svg className="form__icon form__icon--2">
                  <use href="./images/sprite.svg#form-2"></use>
                </svg>
              </div>

              <div className="form__field form__field--big">
                <label for="comments" className="comments">
                  Comments
                </label>
                <textarea
                  name="comments"
                  className="comments__input"
                  id="comments"
                  placeholder="Input text"
                ></textarea>
              </div>

              <label for="policy" className="footer__policy">
                <input
                  type="checkbox"
                  name="policy"
                  id="policy"
                  className="policy-checkbox"
                />
                <span className="policy-icon"></span>

                <b className="policy-text">
                  I agree with the newsletter and accept
                </b>
                <a href="" className="footer__policy--accent">
                  Agreement conditions
                </a>
              </label>

              <button type="submit" className="modal__button">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default MainPage;
