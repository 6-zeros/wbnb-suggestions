import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
     this.state={

    };
  }

  render() {
    return(

      <div> Hi This is a message</div>
    );
   };
}

ReactDOM.render(<App />, document.getElementById('app'));