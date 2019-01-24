import React from "react";
import ReactDOM from "react-dom";
import List from "./Components/List.jsx";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionInfo: []
    };
  }

  getSuggestions(listingId) {
    axios.get(`/${listingId}/suggestions`)
      .then((data) => {
        this.setState({ suggestionInfo: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    const urlParts = window.location.href.split('/');
    const pathName = urlParts[4];
    const listingId = pathName === "" ? (Math.floor(Math.random() * 10000000)+1) : pathName;
    this.getSuggestions(listingId);
  }
  render() {
    console.log('state', this.state)
    return (
      <div>
        <div>
         <h2 className="homes">More homes you may like</h2>
          <List suggestions={this.state.suggestionInfo} />
        </div>
      </div>
    );
  }
}

export default App;
