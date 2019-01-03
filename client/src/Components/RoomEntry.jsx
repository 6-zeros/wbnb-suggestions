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
        <img className="photo" src={this.props.entry.picture} />
        <p className="roomtype">
          {"PRIVATE ROOM  · " + this.props.entry.beds + " bed"}
        </p>
        <h5 className="title">{this.props.entry.title}</h5>

        <p className="roomcost">{"$" + this.props.entry.cost + " per night"}</p>
        {/* <p>{this.props.entry.description}</p> */}
        <div class="ratingStars">
          <span
            className={`${"fa fa-star " +
              (this.props.entry.stars >= 1 ? "checked" : "fastar")}`}
          />
          <span
            className={`${"fa fa-star " +
              (this.props.entry.stars >= 2 ? "checked" : "fastar")}`}
          />
          <span
            className={`${"fa fa-star " +
              (this.props.entry.stars >= 3 ? "checked" : "fastar")}`}
          />
          <span
            className={`${"fa fa-star " +
              (this.props.entry.stars >= 4 ? "checked" : "fastar")}`}
          />
          <span
            className={`${"fa fa-star " +
              (this.props.entry.stars >= 5 ? "checked" : "fastar")}`}
          />
          <p className="review">{this.props.entry.rcount}</p>
        </div>
      </div>
    );
  }
}

export default RoomEntry;
