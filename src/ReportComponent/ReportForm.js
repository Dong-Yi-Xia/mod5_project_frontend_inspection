import React from 'react'


class ReportForm extends React.Component{

    state = {
        grade: "",
        note: "",
        niceCreateOn: ""
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <label>sada</label>
                <input type="text" />
            </div>
        );
    }
}

export default ReportForm