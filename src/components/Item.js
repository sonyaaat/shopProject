import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getItem,addToBasket } from '../redux/main/main-operations';
import { selectItemInfo } from '../redux/main/main-selectors';
import { clearSelectedItem } from '../redux/main/mainSlice';
const Item = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { name, description, price, quantity, image } =
    useSelector(selectItemInfo);
  useEffect(() => {
    dispatch(getItem({ id }));
  }, [dispatch, id]);
  const backClick = evt => {
    dispatch(clearSelectedItem());
  };
  const addBasket = evt => {
    // evt.preventDefault();
    dispatch(addToBasket({id}));
    console.log("@")
  };
  return (
    <>
      <main>
        <div className="container item__container">
          <Link  onClick={backClick} to="/portfolio">
            <button className="back__btn">Back</button>
          </Link>
          {name && (
            <>
              <h1 class="item__header">{name}</h1>
              <p className='item__desk'>{description}</p>
              <div class="item__box">
                <div class="item__box1">
                  <img
                    class="item__img"
                    src={`http://localhost:3000/${image}`}
                    alt="ItemPhoto"
                  />
                </div>
                <div class="item__box2">
                  <p class="item__price"> ${price}</p>
                  <p class="item__subs">Choose a size</p>
                  <form class="item__sizes">
                    <label>
                      <input
                        type="radio"
                        class="item__input"
                        name="size"
                        value="S"
                        checked
                      />
                      <div class="item__size">S</div>
                    </label>
                    <label>
                      <input
                        class="item__input"
                        type="radio"
                        name="size"
                        value="M"
                      />
                      <div class="item__size">M</div>
                    </label>
                    <label>
                      <input
                        type="radio"
                        class="item__input"
                        name="size"
                        value="L"
                      />
                      <div class="item__size">L</div>
                    </label>
                  </form>
                  <button class="item__button" onClick={addBasket}>
                    Add to basket
                  </button>
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
