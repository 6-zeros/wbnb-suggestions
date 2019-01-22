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
  // componentDidMount() {
  //   fetch("/1/suggestions", {
  //     method: "GET",
  //     headers: { "Content-type": "application/json" }
  //   })
  //     .then(data => {
  //       console.log('data.json()', data.json())
  //       return data.json();
  //     })
  //     .then(data2 => {
  //       this.setState({
  //         suggestionInfo: data2
  //       });
  //       return data2;
  //     });
  // }

  getSuggestions() {
    axios.get('/1/suggestions')
      .then((data) => {
        this.setState({ suggestionInfo: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getSuggestions();
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
