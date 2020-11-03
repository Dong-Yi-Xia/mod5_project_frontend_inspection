import React from 'react'


class AddReportForm extends React.Component{

  state = {
        grade: "",
        note: ""
  }

    render() {
        return (
         
                <form >
                    <label>grade</label>
                    <input type="text" name="grade"/>
                    <label>note</label>
                    <input type="text" name="note"/>
                </form>
             
                
           
        );
    }
}

export default AddReportForm