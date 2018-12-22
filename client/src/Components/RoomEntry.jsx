import React from 'react';
class RoomEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
      return(
          <div class = "boxie">
              <img class="photo" src={this.props.entry.picture} />
              <h5 class="title" >{this.props.entry.title} </h5>
              <div>
                  
              <span class={`${"fa fa-star " + ( this.props.entry.stars >= 1 ? "checked" : '') }`}></span>
              <span class={`${"fa fa-star " + ( this.props.entry.stars >= 2 ? "checked" : '') }`}></span>
              <span class={`${"fa fa-star " + ( this.props.entry.stars >= 3 ? "checked" : '') }`}></span>
              <span class={`${"fa fa-star " + ( this.props.entry.stars >= 4 ? "checked" : '') }`}></span>
              <span class={`${"fa fa-star " + ( this.props.entry.stars >= 5 ? "checked" : '') }`}></span>

              </div>

          </div>
      )
  }
}

export default RoomEntry