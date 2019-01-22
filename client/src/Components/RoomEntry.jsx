import React from "react";
class RoomEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: false
    };
  }

  render() {
    return (
      <div className="boxie">
        <div className="heart" />
        <img className="photo" src={this.props.suggestionEntry.picture} />
        <p className="roomtype">
          PRIVATE ROOM  · {this.props.suggestionEntry.beds} {this.props.suggestionEntry.beds > 1 ? 'beds' : 'bed'}
        </p>
        <h5 className="title">{this.props.suggestionEntry.title.substring(0, 50)}</h5>

        <p className="roomcost">{"$" + this.props.suggestionEntry.cost + " per night"}</p>

        <div class="ratingStars">
          <span
            className={`${"fa fa-star " +
              (this.props.suggestionEntry.stars >= 1 ? "checked" : "fastar")}`}
          />
          <span
            className={`${"fa fa-star " +
              (this.props.suggestionEntry.stars >= 2 ? "checked" : "fastar")}`}
          />
          <span
            className={`${"fa fa-star " +
              (this.props.suggestionEntry.stars >= 3 ? "checked" : "fastar")}`}
          />
          <span
            className={`${"fa fa-star " +
              (this.props.suggestionEntry.stars >= 4 ? "checked" : "fastar")}`}
          />
          <span
            className={`${"fa fa-star " +
              (this.props.suggestionEntry.stars >= 5 ? "checked" : "fastar")}`}
          />
          <p className="review">{this.props.suggestionEntry.reviewcount}</p>
        </div>
      </div>
    );
  }
}

export default RoomEntry;
