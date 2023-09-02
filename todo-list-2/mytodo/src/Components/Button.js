import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <div>
      <button
        style={{ backgroundColor: props.color }}
        className="btn"
        onClick={props.onClickFunc}
      >
        {props.text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  text: "Btn",
  color: "green",
};

Button.propType = {
  text: PropTypes.string,
  color: PropTypes.string,
  onCLickFunc: PropTypes.func.isRequired,
};
