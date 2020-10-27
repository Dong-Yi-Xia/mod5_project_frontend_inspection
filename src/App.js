import React from 'react'
import './App.css';
require('dotenv').config()

class App extends React.Component {

  componentDidMount(){
    fetch("https://developers.zomato.com/api/v2.1/categories", {
        headers: {
        Accept: "application/json",
        "User-Key": process.env.REACT_APP_ZOMATO_API_KEY
      }
    })
    .then(r => r.json())
    .then(resp => {
      console.log(resp)
    })
  }

  render(){
    console.log (process.env)
    return (
      <div className="App">
          <p>Hello world</p>
      </div>
    )
  }
}

export default App;
