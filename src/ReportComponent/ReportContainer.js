import React from 'react'
import Report from './Report'

class ReportContainer extends React.Component {

    
    render() {
        let reportComponent = this.props.reports.map(reportObj => {
            return <Report key={reportObj.id} report={reportObj} />
        })
        // console.log(this.props.reports)
        return (
            <div>   
                {reportComponent}        
            </div>
        );
    }
}



export default ReportContainer