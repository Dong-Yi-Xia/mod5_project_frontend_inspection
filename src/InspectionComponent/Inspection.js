import React from 'react'
import { connect } from 'react-redux'
import ReportModal from '../ReportComponent/ReportModal'


class Inspection extends React.Component{

    state ={
        hide: true,
        date: this.props.inspection.date,
        nicetime: ""
    }


    handleUpdate = (evt) => {
        this.setState({
            hide: !this.state.hide
        })
    }

    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value
        })
    }

    handleSubmit= (evt) => {
        evt.preventDefault()
        fetch('/inspections', {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
                id: this.props.inspection.id,
                date: this.state.date,
                nicetime: this.state.nicetime
            })
        })
        .then(r => r.json())
        .then(InspectUpdate => {
            this.props.updatedInspection(InspectUpdate)
        })
    }


    handleDelete = (evt) => {
        fetch('inspections', {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
                id: this.props.inspection.id,
            })
        })
        .then(r => r.json())
        .then(inspectionDelete => {
            this.props.deletedInspection(this.props.inspection)
        })
    }

    
    render() {
        console.log(this.props.inspection)
        let {date, nicetime} = this.props.inspection
        let {name, address} = this.props.inspection.restaurant
        return (
             <>
                <tr>
                    <td> {date}</td>
                    <td> {nicetime}</td>
                    <td> {name}</td>
                    <td> {address}</td>    
                    <td> 
                        {/* <button className="ui button" onClick={this.showModal}> 📋 </button> */}
                        <ReportModal storeName={this.props.inspection.restaurant.name}
                                    reports={this.props.inspection.reports}
                        />
                    </td>
                    <td>
                        <button className="ui button" onClick={this.handleUpdate}> 🛠 </button> 
                        <button className="ui button" onClick={this.handleDelete}> ❌ </button> 
                    </td>
                </tr>

                <div>
                {this.state.hide ?
                 null 
                 : 
                  <form className="inspectionForm ui form" onSubmit={this.handleSubmit}>
                     <div className="inline fields">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" required
                            value={this.state.date} onChange={this.handleChange}/>

                        <label htmlFor="nicetime">Time</label>
                        <input type="time" name="nicetime" required
                            value={this.state.nicetime} onChange={this.handleChange}/>

                        <button class="ui primary button" type="submit">UpdateNow</button>
                    </div>
                 </form>
                }
                </div>
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return{
        token: state.userRR.token
    }
}

let updatedInspection = (update) => {
    return {
        type: "UPDATE_INSPECTION_DATETIME",
        payload: update
    }
}

let deletedInspection = (deleted) => {
    return {
        type: "DELETE_INSPECTION",
        payload: deleted
    }
}

let mapDispatchToProps = {
    updatedInspection,
    deletedInspection
}


export default connect(mapStateToProps, mapDispatchToProps)(Inspection)