import React from 'react'

class Report extends React.Component {

    state = {
        grade: "",
        note: "",
        niceCreateOn: ""
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
                    <button> Click</button>
                </div>
                
            </div>
        );
    }
}

export default Report