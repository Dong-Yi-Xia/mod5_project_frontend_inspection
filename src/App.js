import React from 'react'
import './App.css';
import StorePages  from './RestaurantComponent/StorePages'


class App extends React.Component {



  
  render(){
   


    return (
      <div className="App">
          <p>Hello world</p>

          <StorePages  />
      </div>
    )
  }
}

export default App;
