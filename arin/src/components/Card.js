import React from "react";
import propTypes from "prop-types";

class Card extends React.Component {
  render() {
  return (
      <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="imageX" />
          <div className="card-body">
            <h5 className="card-title">{this.props.cardTitle}</h5>
              <p className="card-text">{this.props.cardText}</p>
              <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
          </div>
      </div>
  );
}};

Card.defaultProps = {
  cardTitle: "Zigana",
  
  image: "https://picsum.photos/id/555/200/300"
};
Card.propTypes = {
  cardText: propTypes.string.isRequired,
  image: propTypes.string
};

export default Card;

