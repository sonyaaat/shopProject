import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserInfo, getItem } from "../redux/main/main-operations";
import { selectUserInfo, selectItemInfo } from "../redux/main/main-selectors";
import { useNavigate } from "react-router-dom";
import { makeOrder, buyAll } from "../redux/main/main-operations";
import sprite from "../images/sprite.svg";
import { selectIsLoading } from "../redux/main/main-selectors";
import Spinner from "./Spinner";
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
  // const { name, description, price, image } = useSelector(selectItemInfo);
  const onSubmit = (evt) => {
    dispatch(buyAll());
    navigate("/completed");
  };
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <main>
        {/* <div className="container-fluid mt--7 container-js">
        <div className="buy-item  ">
        <div className="buy__left">
   <h1 className="buy__text">{name}</h1>
    <p className="buy__text">{description}</p>
    <p className="buy__text">${price}</p></div>
     <img  width="170" height="170" src={`http://localhost:3000/${image}`} alt={name}/>
         </div>
        </div> */}

      {isLoading ? <Spinner/> :
        <div className="row">
        <div className="col-xl-8 order-xl-1 centered">
          <div className="card bg-secondary shadow">
            <div className=" card-body ">
              {firstName ? (
                <form className="js-form" onSubmit={onSubmit}>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused js-username">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <p
                            required
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            placeholder="Username"
                            name="username"
                          >
                            {username}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group js-email">
                          <label
                            className="form-control-label"
                            htmlFor="input-email "
                          >
                            Email address
                          </label>
                          <p
                            type="email"
                            id="input-email"
                            name="email"
                            className="form-control form-control-alternative"
                          >
                            {email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused js-firstname">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <p className="form-control form-control-alternative">
                            {firstName}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused js-lastname">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <p className="form-control form-control-alternative">
                            {lastName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Payment info
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused js-username">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Card number
                          </label>
                          <input
                            required
                            type="number"
                            className="form-control form-control-alternative"
                            placeholder="Card number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group js-email">
                          <label
                            className="form-control-label"
                            htmlFor="input-email "
                          >
                            Expiration date
                          </label>
                          <input
                            required
                            type="number"
                            className="form-control form-control-alternative"
                            placeholder="Exp date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused js-firstname">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            CVV
                          </label>
                          <input
                            required
                            type="number"
                            className="form-control form-control-alternative"
                            placeholder="Card number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4 js-contact">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <p className="form-control form-control-alternative">
                            {address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <p className="form-control form-control-alternative">
                            {city}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <p className="form-control form-control-alternative">
                            {country}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label
                            required
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <p className="form-control form-control-alternative">
                            {postalCode}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="buy__buttons">
                    {/* <Link to={'/basket'}> */}{" "}
                    <button
                      className="buy__btn buy__btn--submit"
                      type="submit"
                      // onClick={onSubmit}
                    >
                      SUBMIT
                    </button>
                    {/* </Link> */}
                    <Link to={"/basket"}>
                      {" "}
                      <button
                        className="buy__btn buy__btn--cancel"
                        type="submit"
                      >
                        CANCEL
                      </button>
                    </Link>
                  </div>
                </form>
              ) : (
                <Link to={"/userInfo"}>
                  {" "}
                  <p className="buy__complete">
                    At first complete your personal info
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>}
      </main>
    </>
  );
};
export default Confirmed;
