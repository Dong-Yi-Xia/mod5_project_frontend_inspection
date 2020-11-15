import React from 'react'
import { Button } from 'react-bootstrap'
import ReportModalForm from './ReportModalForm'
import {connect} from 'react-redux'



class Report extends React.Component {

    handleDelete = (evt) =>{
        console.log("been clicked")
        fetch("https://mod5restaurants-api.herokuapp.com/reports/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
                id: this.props.report.id
            })
        })
        .then(r => r.json())
        .then(deletedReportObj => {
            this.props.deletedReport(this.props.report)
        })
    }

    render() {
        // console.log(this.props.report)
        let {note, grade, niceCreateOn} = this.props.report
        return (
            <div className="eachReport">
                <div>
                    <p>Grade: {grade}</p>
                    <p>note: {note}</p>
                    <p>{niceCreateOn}</p>  
                </div>
                <div>
                    <ReportModalForm report={this.props.report}/>
                    <Button onClick={this.handleDelete} variant="danger"> Delete </Button>
                </div>
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return {
        token: state.userRR.token,
    }
}

let deletedReport = (reportInfo) => {
    return {
        type: "DELETED_REPORT",
        payload: reportInfo
    }
}

let mdtp = {
    deletedReport
}


export default connect(mapStateToProps, mdtp)(Report)