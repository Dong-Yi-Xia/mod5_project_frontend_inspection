import React from 'react'
import { connect } from 'react-redux'
import MainMap from './MainMap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


class HomePage extends React.Component {

    setDate = () => {
      let date = new Date();
      let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]
      return dateString
    }

    state = {
        curTime: "",
        selectDate: this.setDate()
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 1000)
      }

    handleChange = (evt) => {
      let newDate = new Date(evt.getTime() - (evt.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]

      this.setState({
        selectDate : newDate
      })
   
    }

    render(){
        // let today = new Date().toISOString().slice(0, 10)
        // let today = new Date().toLocaleDateString()
        return(
            <div>
                <h1>{this.state.curTime}</h1>
                <h1>NYC Restaurant Inspection</h1> 

                 {/* <input type="date" name="selectDate" value={this.state.selectDate} onChange={this.handleChange}/> */}

                <h3>Welcome {this.props.name}</h3> 
                <Calendar onChange={this.handleChange}/>
                <MainMap selectDate={this.state.selectDate}/>

            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
      name: state.userRR.user.name
    }
 }

export default connect(mapStateToProps)(HomePage)