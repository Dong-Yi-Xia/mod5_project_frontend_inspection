import React from 'react'
import { connect } from 'react-redux';
import Inspection from './Inspection'
import uuid from 'react-uuid'
import Alert from 'react-bootstrap/Alert'
import MainMap from '../Home/MainMap';


class InspectionContainer extends React.Component{

    // state = {
    //   show : false
    // }

    render() {

        let sortedByDate = this.props.inspections.sort( (numA, numB) =>{
          return new Date(numA.date) - new Date(numB.date)
        })

        let inspectionComponent = sortedByDate.map(inspectionObj => {
            return <Inspection 
                    key={uuid()} 
                    inspection={inspectionObj} 
                    messageFun={this.messageFun}
                    />
        })

        return (
            <div className="inspectionContainer">     
                <table className="ui celled striped padded table">
                    <tbody>
                        <tr>
                            <th>
                               <h3 className="ui center aligned header">Date</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Time</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Restaurant</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Location</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Reports</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Edit</h3>
                            </th>
                        </tr>
                        {inspectionComponent}
                    </tbody>
              </table>

              {/* {this.state.show ? <MainMap inspectionArray={this.props.inspections}/> : null } */}
            </div>
        );
    }
}



export default InspectionContainer