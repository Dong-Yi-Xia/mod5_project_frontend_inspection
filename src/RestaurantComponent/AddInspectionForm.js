import React from 'react'
import {connect} from 'react-redux'

class AddInspectionForm extends React.Component{

    state = {
        date: "",
        time: ""
    }


    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit = (evt) =>{

        // let restaurantObj = {
        //     id: this.props.restaurantInfo.id,
        //     name: this.props.restaurantInfo.name,
        //     thumb: this.props.restaurantInfo.thumb,
        //     address: this.props.restaurantInfo.location.address,
        //     lat: this.props.restaurantInfo.location.latitude,
        //     lon: this.props.restaurantInfo.location.longitude
        // }

        evt.preventDefault()
        console.log(this)
        // console.log(this.props.restaurantInfo)
        fetch('/inspections', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
                date: this.state.date,
                time: this.state.time,
                restaurant_id: this.props.restaurantInfo.id,
                id: this.props.restaurantInfo.id,
                name: this.props.restaurantInfo.name,
                thumb: this.props.restaurantInfo.thumb,
                address: this.props.restaurantInfo.location.address,
                lat: this.props.restaurantInfo.location.latitude,
                lon: this.props.restaurantInfo.location.longitude
            })
        })
            .then(r => r.json())
            .then(newInspectionObj => {
                if(newInspectionObj.error){
                    alert(newInspectionObj.error)
                    this.setState({
                        date: "",
                        time: ""
                    })
                } else {
                    alert("Inspection has been added")
                    this.props.setInspectionInfo(newInspectionObj)
                    this.setState({
                        date: "",
                        time: ""
                    })
                }
            })
    }

    render() {
        // console.log(this.props.restaurantInfo.id)
        return (
            <div>
                <form className="inspectionForm ui form" onSubmit={this.handleSubmit}>
                
                    <input 
                        type="date" 
                        name="date" 
                        value={this.state.date}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        value={this.state.time}
                        onChange={this.handleChange}
                        required
                    />
                        <button class="ui primary button" type="submit">Add to Inspection</button>
                 
                </form>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return{
        token: state.userRR.token
    }
}

let setInspectionInfo = (inspectionInfo) => {
    return {
        type: "SET_INSPECTION_INFO",
        payload: inspectionInfo
    }
}

let mapDispatchToProps = {
    setInspectionInfo
}

export default connect(mapStateToProps,mapDispatchToProps)(AddInspectionForm)