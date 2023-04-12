
import sprite from '../images/sprite.svg';
const Footer=()=>{
return(
    <>
     <footer className="footer">
        <div className="container footer__container">
          <div className="top-part">
            <div className="left-part">
              <a href="./" lang="en" className="logo-bottom">
                Esste<span className="studio-bottom">Store</span>
              </a>
              <address className="address-tag">
                <ul className="list footer__list">
                  <li className="footer__item">
                    <a href="./" className="footer__link address link">
                      Vinnytsia Ukraine
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      href="mailto:info@example.com "
                      className="footer__link link"
                    >
                      info@example.com
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="tel:+380991111111" className="footer__link link">
                      +38 099 111 11 11
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className="center-part">
              <p className="footer__join">join</p>

              <ul className="footer-soc">
                <li className="list footer-soc__item">
                  <a href="./" className="link footer-soc__link">
                    <svg className="footer-soc__svg">
                      <use href={`${sprite}#instagram`}></use>
                    </svg>
                  </a>
                </li>
                <li className="list footer-soc__item">
                  <a href="./" className="link footer-soc__link">
                    <svg className="footer-soc__svg">
                      <use href={`${sprite}#twitter`}></use>
                    </svg>
                  </a>
                </li>
                <li className="list footer-soc__item">
                  <a href="./" className="link footer-soc__link">
                    <svg className="footer-soc__svg">
                      <use href={`${sprite}#facebook`}></use>
                    </svg>
                  </a>
                </li>
                <li className="list footer-soc__item">
                  <a href="./" className="link footer-soc__link">
                    <svg className="footer-soc__svg">
                      <use href={`${sprite}#linkedin`}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-part">
            <p  className="footer__subscribe">
              Subscribe to letters
            </p>
            <form className="footer__form">
              <input
                type="email"
                id="footer-email"
                className="footer__input"
                placeholder="E-mail"
              />
              <button type="submit" className="footer__button">
                Subscribe
                <svg className="footer__button--img">
                  <use
                    className="footer__button--img"
                    href={`${sprite}#send`}
                  ></use>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
)
}
export default Footer