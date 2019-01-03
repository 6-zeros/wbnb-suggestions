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
      <div class="boxie">
        <div class="heart" />
        <img class="photo" src={this.props.entry.picture} />
        <p class="roomtype">
          {"PRIVATE ROOM  · " + this.props.entry.beds + " bed"}
        </p>
        <h5 class="title">{this.props.entry.title}</h5>

        <p class="roomcost">{"$" + this.props.entry.cost + " per night"}</p>
        {/* <p>{this.props.entry.description}</p> */}
        <div>
          <span
            class={`${"fa fa-star " +
              (this.props.entry.stars >= 1 ? "checked" : "")}`}
          />
          <span
            class={`${"fa fa-star " +
              (this.props.entry.stars >= 2 ? "checked" : "")}`}
          />
          <span
            class={`${"fa fa-star " +
              (this.props.entry.stars >= 3 ? "checked" : "")}`}
          />
          <span
            class={`${"fa fa-star " +
              (this.props.entry.stars >= 4 ? "checked" : "")}`}
          />
          <span
            class={`${"fa fa-star " +
              (this.props.entry.stars >= 5 ? "checked" : "")}`}
          />
          <p class="review">{this.props.entry.rcount}</p>
        </div>
      </div>
    );
  }
}

export default RoomEntry;
