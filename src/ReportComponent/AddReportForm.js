import React from 'react'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'


class AddReportForm extends React.Component{

    state = {
            grade: "",
            note: ""    
        }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit = (evt) =>{
        evt.preventDefault()
        fetch('https://mod5restaurants-api.herokuapp.com/reports', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
                grade: this.state.grade,
                note: this.state.note,
                inspection_id: this.props.inspection.id
            })
        })
        .then(r => r.json())
        .then(newReport => {
            this.props.setNewReport(newReport)
            alert("Successfully Been Added")
            this.props.handleClose()
        })

    }

    render() {
        // console.log(this.state)
        return (
             <div className="reportEditForm">
                <form onSubmit={this.handleSubmit}>
                    <label>Grade</label>
                    {/* <input type="text" name="grade" value={this.state.grade} onChange={this.handleChange} required/> */}       
                    <select name="grade" value={this.state.grade} onChange={this.handleChange} required>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>

                    <textarea type="text" name="note" 
                    placeholder="notes" value={this.state.note} 
                    onChange={this.handleChange} required
                    rows="10" cols="50"
                    />
                    <Button variant="primary" type="submit"> Add Report </Button>
                </form>
            </div>
   
        );
    }
}

let mapStateToProps = (state) => {
    // console.log(state)
    return {
        token: state.userRR.token,
        inspection: state.reportRR.currentInspection
    }
}

let setNewReport = (reportInfo) => {
    return {
        type: "SET_NEW_REPORT",
        payload: reportInfo
    }
}

let mapDispatchToProps = {
    setNewReport
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReportForm)