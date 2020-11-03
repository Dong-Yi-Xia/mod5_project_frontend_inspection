import React from 'react'
import ReportModalForm from './ReportModalForm'



class Report extends React.Component {

  

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
                <ReportModalForm report={this.props.report}/>
            </div>
        );
    }
}

export default Report