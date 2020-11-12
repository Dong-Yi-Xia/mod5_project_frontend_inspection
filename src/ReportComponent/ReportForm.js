import React from 'react'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

class ReportForm extends React.Component{

    state = {
        grade: this.props.report.grade,
        note: this.props.report.note,
        niceCreateOn: "",
        success: false
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("/reports", {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
                id: this.props.report.id,
                grade: this.state.grade,
                note: this.state.note
            })
        })
        .then(r => r.json())
        .then(updateReport => {
            this.props.setUpdateReport(updateReport)
            this.setState({
                success: true,
                grade: "",
                note: ""
            })
        })

    }


    render() {
        console.log(this.state)
        return (
            <div className="reportEditForm">
                {this.state.success ? <Alert variant="success">SUCCESSFULLY BEEN UPDATED</Alert> : null }
                <label>{this.props.report.niceCreateOn}</label>
                <form onSubmit={this.handleSubmit}>
                    <label>Grade</label>
                    {/* <input type="text" name="grade" value={this.state.grade} onChange={this.handleChange} required/> */}
                    <select name="grade" id="grade" value={this.state.grade} onChange={this.handleChange} required>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    
                    <textarea type="text" name="note" value={this.state.note} onChange={this.handleChange} required rows="10" cols="50"/>
                    <Button variant="primary" type="submit"> Save Changes </Button>
                </form>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return{
        report: state.reportRR.singleReport,
        token: state.userRR.token
    }
}

let setUpdateReport = (updatedReport) =>{
    return{
        type: "SET_UPDATE_REPORT",
        payload: updatedReport
    }
} 

let mapDispatchToProps = {
    setUpdateReport
}


export default connect(mapStateToProps, mapDispatchToProps)(ReportForm)