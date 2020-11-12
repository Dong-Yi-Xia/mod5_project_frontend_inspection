import React from 'react'
import { connect } from 'react-redux'
import MainMap from './MainMap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class HomePage extends React.Component {

    setDate = () => {
      let date = new Date();
      let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]
      return dateString
    }

    state = {
        selectDate: this.setDate()
    }


    handleChange = (evt) => {
      let newDate = new Date(evt.getTime() - (evt.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]
      // "year-month-day"
      this.setState({
        selectDate : newDate
      })
   
    }

    render(){
        // let today = new Date().toISOString().slice(0, 10)
        // let today = new Date().toLocaleDateString()
        
        return(
            <div className="mainbody">
              <div className="homepagetitle">
                <h1>UNDERCOVER RESTAURANT INSPECTOR</h1> 

                 {/* <input type="date" name="selectDate" value={this.state.selectDate} onChange={this.handleChange}/> */}
                {this.props.name ? 
                  <h3>Welcome Back, Inspector {this.props.name}</h3> :
                  <h3>Who might you are be???</h3>
                }
               </div> 
                <Container className="header-widget">
                  <Row>
                    <Col><div id="openweathermap-widget-11"></div> </Col>
                    <Col > <Calendar className="header_calender" onChange={this.handleChange}/> </Col>  
                  </Row>
                </Container>
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