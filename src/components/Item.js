import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getItem, addToBasket } from "../redux/main/main-operations";
import { selectItemInfo } from "../redux/main/main-selectors";
import { clearSelectedItem } from "../redux/main/mainSlice";
import { selectIsLoggedIn } from "../redux/auth/auth-selectors";
const Item = () => {
  const dispatch = useDispatch();
  const isLoggedIn=useSelector(selectIsLoggedIn)
  const { id } = useParams();
  const { name, description, price, quantity, image } =
    useSelector(selectItemInfo);
  useEffect(() => {
    dispatch(getItem({ id }));
  }, [dispatch, id]);
  const backClick = (evt) => {
    dispatch(clearSelectedItem());
  };
  const addBasket = (evt) => {
    // evt.preventDefault();
    dispatch(addToBasket({ id }));
  };
  return (
    <>
      <main>
        <div className="container item__container">
          <Link onClick={backClick} to="/portfolio">
            <button className="back__btn">Back</button>
          </Link>
          {name && (
            <>
              <h1 className="item__header">{name}</h1>
              <p className="item__desk">{description}</p>
              <div className="item__box">
                <div className="item__box1">
                  <img
                    className="item__img"
                    src={`http://localhost:3000/${image}`}
                    alt="ItemPhoto"
                  />
                </div>
                <div className="item__box2">
                  <p className="item__price"> ${price}</p>
                  <p className="item__subs">Choose a size</p>
                  <form className="item__sizes" defaultChecked="S">
                    <label >
                      <input
                        type="radio"
                        className="item__input"
                        name="size"
                        value="S"
                        
                      />
                      <div className="item__size">S</div>
                    </label>
                    <label>
                      <input
                        className="item__input"
                        type="radio"
                        name="size"
                        value="M"
                      />
                      <div className="item__size">M</div>
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="item__input"
                        name="size"
                        value="L"
                      />
                      <div className="item__size">L</div>
                    </label>
                  </form>
                  {isLoggedIn ? <button className="item__button" onClick={addBasket}>
                    Add to basket
                  </button> :
                  <div>
                    <Link to="/login" >Log in to buy</Link></div>}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};
export default Item;
