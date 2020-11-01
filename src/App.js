import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom' 
import { connect } from 'react-redux'

import StorePages from './RestaurantComponent/StorePages'
import InspectionsPage from './InspectionComponent/InspectionsPage'
import NavBarr from './Main/NavBarr'
import LoginForm from './LogInComponent/LoginForm'
import RegisterForm from './LogInComponent/RegisterForm'
import HomePage from './Home/HomePage'
import NotFound from './Main/NotFound';
import Footer from './Main/Footer'



class App extends React.Component {



  componentDidMount(){
    if(localStorage.token){
      fetch("/keep_logged_in",{
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(resp => {
        if(resp.token){
          this.props.setUserInfo(resp)
        }
      })
    }
  }

  
  render(){
  console.log(localStorage)
    return (
      <div className="App">

        <header>
          <NavBarr/>
        </header>

        <main>
          <Switch>
            <Route  path="/" exact component={HomePage} />
            <Route  path="/login" exact component={LoginForm} />
            <Route  path="/register" exact component={RegisterForm} />
            <Route  path="/inspections" exact component={InspectionsPage} />
            <Route  path="/restaurants" exact component={StorePages} />
            <Route  component={NotFound} />
          </Switch>

        </main>

        <footer>
          <Footer/>
        </footer>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
   console.log(state)
}


let setUserInfo = (userInfo) =>{
    return{
      type: "SET_USER_INFO",
      payload: userInfo
    }
}

let mapDispatchToProps = {
   setUserInfo: setUserInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
