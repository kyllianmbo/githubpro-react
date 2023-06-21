import './App.css';

import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      myString: ''
    }
    this.getNumbers();
  }
  
  getNumbers() {
    for (var i=1; i < 11; i++) {
      this.state.myString = this.state.myString + i + ", ";
      
    }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.myString}
        <br/>
        Kyllian
      </div>
    );
  }

}

export default App;