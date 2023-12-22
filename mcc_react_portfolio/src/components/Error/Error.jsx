import React from "react";
import failure from "../../img/failure.jpeg";
import "./_error.scss";
import { useNavigate } from "react-router-dom";

const Errors = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1 className="error_page">Sometihing is Wrong!</h1>
      <button
        className="error_back"
        type="button"
        onClick={() => navigate("/")}
      >
        HOME
      </button>
    </div>
  );
};

export default Errors;