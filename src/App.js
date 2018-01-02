import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Paint from './Paint';
import './App.css';
// inline styles for Paint component
const canvasSettings = {
  style: {
      background: 'white',
  },
  width: '1000px',
  height: '700px',
  className: 'Canvas',
  lineWidth: "2",
  strokeColor: "#d20001",
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Paint {...canvasSettings}/>
      </div>
    );
  }
}

export default App;
