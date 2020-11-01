import React from 'react'

class Inspection extends React.Component{
    render() {
        console.log(this.props.inspection)
        let {date, nicetime} = this.props.inspection
        let {name, address} = this.props.inspection.restaurant
        return (
            <div>
                <p> {date} -- {nicetime} -- {name} -- {address}</p>
            </div>
        );
    }
}

export default Inspection