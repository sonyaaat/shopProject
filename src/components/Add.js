import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/main/main-operations";
import { toast } from "react-toastify";
let formData = new FormData();
let downloaded;

const Add = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "description":
        return setDescription(value);
      case "price":
        return setPrice(value);
      case "quantity":
        return setQuantity(value);

      default:
        return;
    }
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    const {
      elements: { name, quantity, price, description },
    } = evt.target;

    formData.append("name", name.value);
    formData.append("quantity", quantity.value);
    formData.append("price", price.value);
    formData.append("description", description.value);

    if (!name || !quantity || !price || !description || !downloaded) {
      formData = new FormData();
      toast.error("Add image");
      return;
    }

    dispatch(addItem(formData));
    setName("");
    setQuantity("");
    setPrice("");
    setDescription("");
  };
  const imgChange = (event) => {
    formData.append("image", event.target.files[0]);
    downloaded = true;
  };
  return (
    <main>
      <div className="main-content" />

      <nav
        className="navbar navbar-top navbar-expand-md navbar-dark"
        id="navbar-main"
      >
        <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"></form>
      </nav>

      <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center admin-photo">
        <span className="mask bg-gradient-default opacity-8"></span>

        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2"></div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5"></div>
                    </div>
                  </div>
                  <div className="text-center"></div>
                  <label htmlFor="images" className="drop-container">
                    <span className="drop-title">Drop files here</span>
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      id="images"
                      className="input-img"
                      onChange={imgChange}
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">Add new item</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form
                    className="add__form"
                    onSubmit={onSubmit}
                    data-testid="add-form"
                  >
                    <h6 className="heading-small text-muted mb-4">
                      information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-name"
                            >
                              Name
                            </label>
                            <input
                              required
                              type="text"
                              id="input-name"
                              className="form-control form-control-alternative"
                              placeholder="name"
                              value={name}
                              name="name"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="input-desc"
                            >
                              Description
                            </label>
                            <input
                              required
                              type="text"
                              id="input-desc"
                              className="form-control form-control-alternative"
                              placeholder="description"
                              value={description}
                              onChange={handleChange}
                              name="description"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Quantity
                            </label>
                            <input
                              required
                              type="text"
                              id="input-first-name"
                              className="form-control form-control-alternative"
                              name="quantity"
                              placeholder="quantity"
                              value={quantity}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Price
                            </label>
                            <input
                              required
                              type="text"
                              id="input-last-name"
                              className="form-control form-control-alternative"
                              name="price"
                              placeholder="price"
                              value={price}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />

                    <button type="submit" className="admin__submit__btn">
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Add;
