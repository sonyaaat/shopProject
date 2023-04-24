import { ColorRing } from "react-loader-spinner";
import React from "react";

const Spinner = () => {
  return (
    <div className="centered2">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperclassName="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};
export default Spinner;
