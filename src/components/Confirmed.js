import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUserInfo, getItem } from '../redux/main/main-operations';
import { selectUserInfo, selectItemInfo } from '../redux/main/main-selectors';
import { useNavigate } from 'react-router-dom';
import { makeOrder ,buyAll} from '../redux/main/main-operations';
import sprite from '../images/sprite.svg';
const Confirmed = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getItem({ id }));
  }, [dispatch]);
  const {
    country,
    city,
    email,
    postalCode,
    firstName,
    lastName,
    username,
    address,
  } = useSelector(selectUserInfo);
  const { name, description, price, image } = useSelector(selectItemInfo);
  const onSubmit = evt => {
    dispatch(buyAll());
    navigate("/completed")
  };
  return (
    <>
      <main>
        {/* <div class="container-fluid mt--7 container-js">
        <div class="buy-item  ">
        <div class="buy__left">
   <h1 class="buy__text">{name}</h1>
    <p class="buy__text">{description}</p>
    <p class="buy__text">${price}</p></div>
     <img  width="170" height="170" src={`http://localhost:3000/${image}`} alt={name}/>
         </div>
        </div> */}

        <div class="row">
          <div class="col-xl-8 order-xl-1 centered">
            <div class="card bg-secondary shadow">
              <div class=" card-body ">
                {firstName ? (
                  <form class="js-form" onSubmit={onSubmit}>
                    <h6 class="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div class="pl-lg-4">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group focused js-username">
                            <label
                              class="form-control-label"
                              for="input-username"
                            >
                              Username
                            </label>
                            <p
                              required
                              type="text"
                              id="input-username"
                              class="form-control form-control-alternative"
                              placeholder="Username"
                              name="username"
                            >
                              {username}
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group js-email">
                            <label
                              class="form-control-label"
                              for="input-email "
                            >
                              Email address
                            </label>
                            <p
                              type="email"
                              id="input-email"
                              name="email"
                              class="form-control form-control-alternative"
                            >
                              {email}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group focused js-firstname">
                            <label
                              class="form-control-label"
                              for="input-first-name"
                            >
                              First name
                            </label>
                            <p class="form-control form-control-alternative">
                              {firstName}
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group focused js-lastname">
                            <label
                              class="form-control-label"
                              for="input-last-name"
                            >
                              Last name
                            </label>
                            <p class="form-control form-control-alternative">
                              {lastName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="my-4" />

                    <h6 class="heading-small text-muted mb-4">
                            Payment info
                          </h6>
                          <div class="pl-lg-4">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="form-group focused js-username">
                                  <label
                                    class="form-control-label"
                                    for="input-username"
                                  >
                                    Card number
                                  </label>
                                  <input
                                    required
                                    type="number"
                                    class="form-control form-control-alternative"
                                    placeholder="Card number"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group js-email">
                                  <label
                                    class="form-control-label"
                                    for="input-email "
                                  >
                                    Expiration date
                                  </label>
                                  <input
                                    required
                                    type="number"
                                    class="form-control form-control-alternative"
                                    placeholder="Exp date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="form-group focused js-firstname">
                                  <label
                                    class="form-control-label"
                                    for="input-first-name"
                                  >
                                    CVV
                                  </label>
                                  <input
                                    required
                                    type="number"
                                    class="form-control form-control-alternative"
                                    placeholder="Card number"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr class="my-4" />

                    <h6 class="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div class="pl-lg-4 js-contact">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group focused">
                            <label
                              class="form-control-label"
                              for="input-address"
                            >
                              Address
                            </label>
                            <p class="form-control form-control-alternative">
                              {address}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="form-group focused">
                            <label class="form-control-label" for="input-city">
                              City
                            </label>
                            <p class="form-control form-control-alternative">
                              {city}
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-group focused">
                            <label
                              class="form-control-label"
                              for="input-country"
                            >
                              Country
                            </label>
                            <p class="form-control form-control-alternative">
                              {country}
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-group">
                            <label
                              required
                              class="form-control-label"
                              for="input-country"
                            >
                              Postal code
                            </label>
                            <p class="form-control form-control-alternative">
                              {postalCode}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="buy__buttons">
                      {/* <Link to={'/basket'}> */}
                        {' '}
                        <button
                          class="buy__btn buy__btn--submit"
                          type="submit"
                          // onClick={onSubmit}
                        >
                          SUBMIT
                        </button>
                      {/* </Link> */}
                      <Link to={'/basket'}>
                        {' '}
                        <button class="buy__btn buy__btn--cancel" type="submit">
                          CANCEL
                        </button>
                      </Link>
                    </div>
                  </form>
                ) : (
                  <Link to={'/userInfo'}>
                    {' '}
                    <p className="buy__complete">
                      At first complete your personal info
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Confirmed;
