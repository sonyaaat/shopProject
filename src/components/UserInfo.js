import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserInfo,
  setUserInfo,
  setAvatar,
} from "../redux/main/main-operations";
import { selectIsLoading, selectUserInfo } from "../redux/main/main-selectors";
import Spinner from "./Spinner";

const UserInfo = () => {
  const isLoading = useSelector(selectIsLoading);
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Email, setEmail] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Username, setUsername] = useState("");
  const [Address, setAddress] = useState("");
  //const [Avatar, setAvatar] = useState('');
  const selectedInfo = useSelector(selectUserInfo);
  const {
    country,
    city,
    email,
    postalCode,
    firstName,
    lastName,
    username,
    address,
    avatar,
  } = selectedInfo;
  useEffect(() => {
    const {
      country,
      city,
      email,
      postalCode,
      firstName,
      lastName,
      username,
      address,
      avatar,
    } = selectedInfo;
    setCountry(country);
    setCity(city);
    setEmail(email);
    setPostalCode(postalCode);
    setFirstName(firstName);
    setLastName(lastName);
    setUsername(username);
    setAddress(address);
  }, [selectedInfo]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleSubmit = (evt) => {
    const {
      target: {
        country,
        city,
        postalCode,
        firstname,
        lastname,
        username,
        address,
      },
    } = evt;
    evt.preventDefault();

    dispatch(
      setUserInfo({
        country: Country,
        city: City,
        postalCode: PostalCode,
        firstName: FirstName,
        lastName: LastName,
        username: Username,
        address: Address,
      })
    );
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "country":
        return setCountry(value);
      case "city":
        return setCity(value);
      case "postalCode":
        return setPostalCode(value);
      case "firstname":
        return setFirstName(value);
      case "lastname":
        return setLastName(value);
      case "username":
        return setUsername(value);
      case "address":
        return setAddress(value);

      default:
        return;
    }
  };

  const imgChange = (event) => {
    let formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    dispatch(setAvatar(formData));
  };
  return (
    <main role="main">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="main-content">
          <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center admin-photo">
            <span className="mask bg-gradient-default opacity-8"></span>

            <div className="container-fluid d-flex align-items-center">
              <div className="row">
                <div className="col-lg-7 col-md-10 js-name">
                  <h1 className="display-2 text-white">
                    Hello {firstName && firstName} {lastName && lastName}
                  </h1>
                  `
                  <p className="text-white mt-0 mb-5">
                    This is your profile page. You can see your info here and
                    edit your profile
                  </p>
                  <p href="" className="btn btn-info" role='button'>
                    Edit profile
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt--7 container-js">
            <div className="row">
              <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile shadow">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                        <img
                          src={
                            avatar
                              ? `http://localhost:3000/${avatar}`
                              : "https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          }
                          alt="Avatar"
                          className="rounded-circle"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                  <div className="card-body pt-0 pt-md-4">
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5"></div>
                      </div>
                    </div>
                    <div className="text-center js-name2">
                      <h3 className="name">
                        <span className="font-weight-light">
                          {firstName && firstName} {lastName && lastName}
                        </span>
                      </h3>
                    </div>
                    <label for="images" className="drop-container">
                      <span className="drop-title">Drop files here</span>
                      or
                      <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        id="images"
                        className="input-img"
                        onChange={imgChange}
                        required
                      />
                    </label>
                    {/* <button className="admin__submit__btn">Delete user</button> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-8 order-xl-1">
                <div className="card bg-secondary shadow">
                  <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="mb-0">My account</h3>
                      </div>
                      <div className="col-4 text-right">
                        <a href="#!" className="btn btn-sm btn-primary">
                          Settings
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form className="js-form" onSubmit={handleSubmit}>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused js-username">
                              <label
                                className="form-control-label"
                                for="input-username"
                              >
                                Username
                              </label>
                              <input
                                onChange={handleChange}
                                required
                                type="text"
                                id="input-username"
                                className="form-control form-control-alternative"
                                placeholder="Username"
                                name="username"
                                value={Username ? Username : ""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group js-email">
                              <label
                                className="form-control-label"
                                for="input-email "
                              >
                                Email address
                              </label>
                              <p className="form-control form-control-alternative">
                                {email && email}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused js-firstname">
                              <label
                                className="form-control-label"
                                for="input-first-name"
                              >
                                First name
                              </label>
                              <input
                                onChange={handleChange}
                                required
                                type="text"
                                id="input-first-name"
                                className="form-control form-control-alternative"
                                name="firstname"
                                placeholder="First name"
                                value={FirstName ? FirstName : ""}
                              ></input>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group focused js-lastname">
                              <label
                                className="form-control-label"
                                for="input-last-name"
                              >
                                Last name
                              </label>
                              <input
                                onChange={handleChange}
                                required
                                type="text"
                                id="input-last-name"
                                className="form-control form-control-alternative"
                                name="lastname"
                                placeholder="Last name"
                                value={LastName ? LastName : ""}
                              ></input>
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
                                for="input-address"
                              >
                                Address
                              </label>
                              <input
                                onChange={handleChange}
                                required
                                id="input-address"
                                className="form-control form-control-alternative"
                                name="address"
                                placeholder="Home Address"
                                value={Address ? Address : ""}
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                for="input-city"
                              >
                                City
                              </label>
                              <input
                                onChange={handleChange}
                                required
                                type="text"
                                name="city"
                                id="input-city"
                                className="form-control form-control-alternative"
                                placeholder="City"
                                value={City ? City : ""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                for="input-country"
                              >
                                Country
                              </label>
                              <input
                                onChange={handleChange}
                                required
                                type="text"
                                name="country"
                                id="input-country"
                                className="form-control form-control-alternative"
                                placeholder="Country"
                                value={Country ? Country : ""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label
                                required
                                className="form-control-label"
                                for="input-country"
                              >
                                Postal code
                              </label>
                              <input
                                onChange={handleChange}
                                required
                                type="number"
                                name="postalCode"
                                id="input-postal-code"
                                className="form-control form-control-alternative"
                                placeholder="Postal code"
                                value={PostalCode ? PostalCode : ""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="admin__submit__btn" type="submit">
                        SUBMIT
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
export default UserInfo;
