import React from 'react'
import './App.css';
import Page from './Page'


class App extends React.Component {


  componentDidMount(){
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=0&count=20`, {
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
   


    return (
      <div className="App">
          <p>Hello world</p>

          <Page />
      </div>
    )
  }
}

export default App;
