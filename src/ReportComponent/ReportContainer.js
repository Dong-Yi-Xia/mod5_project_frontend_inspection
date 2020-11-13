import React from 'react'
import Report from './Report'
import {connect} from 'react-redux'

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


let mapStateToProps = (state) => {
    // console.log(state)
    return {
        reports: state.reportRR.reports
    }
}

export default connect(mapStateToProps)(ReportContainer)