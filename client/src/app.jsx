import React from 'react';
import ReactDOM from 'react-dom';
import List from './Components/List.jsx';
import styles from "./Components/main.module.css" 

class App extends React.Component {
  constructor(props) {
    super(props);
     this.state={
      info : []
    };
  }
  componentDidMount(){
    fetch('/localhost:3123/house', {
      method: "GET",
      headers: {'Content-type' : 'application/json'}
    }).then((data)=>{
      return data.json()
    }).then((data2)=>{
      this.setState({
        info : data2
      })
      console.log(this.state.info)

    })
  }

  render() {
    return(
      <div>
      <div> Hi This is a message</div>
      <div className = "scroller">
        <List house={this.state.info}/>
      </div>
      </div>
    );
   };
}

ReactDOM.render(<App />, document.getElementById('app'));