// document.getElementById("hello-world").innerHTML = 'Hello World from webpack!'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Material-UI Button!
      </Button>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('hello-world'))