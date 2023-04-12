import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromBasket, getFav } from '../redux/main/main-operations';
import { selectFav, selectIsLoading } from '../redux/main/main-selectors';
import sprite from '../images/sprite.svg';

import Spinner from './Spinner';
const Basket = () => {
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFav);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFav());
  }, [dispatch]);
  const onDeleteBasket=(itemId)=>{
    dispatch(deleteFromBasket({id:itemId}))
  }
 
  const totalSum=()=>{
    return favorites.reduce((previousValue, {price})=>{
return previousValue+Number(price)
    },0)
  }
  return (
    <>
      <main>
        <section className="section-cart">
          <header className="section-cart__header">
            <div className="container">
              <h1 className="title-1">Basket</h1>
            </div>
          </header>
          <div className="section-cart__body">
            <div className="container">
              <section className="cart">
                <header className="cart-header">
                  <div className="cart-header__title">Name</div>
                  <div className="cart-header__count">Quantity</div>
                  <div className="cart-header__cost">Price</div>
                </header>
                { isLoading ? <Spinner/> : favorites.length > 0 &&
                  favorites.map(({ name, price, image, itemId }) => (
                    <section className="product" key={itemId}>
                      <div className="product__img">
                        <img
                          className="product__img"
                          alt={name}
                          src={`http://localhost:3000/${image}`}
                        />
                      </div>
                      <div className="product__title">{name}</div>
                      <div className="product__count">
                        <div className="count">
                          <p>1</p>
                        </div>
                      </div>
                      <div className="product__price">{price}</div>
                      <div className="product__controls">
                        <button type="button" className="basket__remove" onClick={()=>onDeleteBasket(itemId)}>
                          <svg width="30px" height="21px" className="icon-bin">
                            <use
                              className="icon-menu"
                              href={`${sprite}#icon-bin`}
                            ></use>
                          </svg>
                        </button>
                        {/* <Link to={`/buy/${itemId}`}>
                       <button  className="basket__btn" > Buy </button></Link> */}
                      </div>
                    </section>
                  ))}
                  {favorites.length===0 && <p className="basket__empty">Your list is empty</p>}
                  {favorites.length>0 && <p className='basket__sum'>Total sum:{totalSum()}</p>}
                 {favorites.length>0 && <Link to="/confirmed" > <button  className="basket__btn buy__all" > Buy all </button></Link>}
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Basket;
