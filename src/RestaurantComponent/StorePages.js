import React from 'react'

class StorePages extends React.Component{

    state = {
        i : 0
    }



  componentDidMount(){
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=0&count=20`, {
        headers: {
        Accept: "application/json",
        "User-Key": process.env.REACT_APP_ZOMATO_API_KEY
      }
    })
    .then(r => r.json())
    .then(resp => {
      console.log(resp)
    })
  }



    nextPage = () => {
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=${this.state.i+20}&count=20`, {
          headers: {
            Accept: "application/json",
            "User-Key": process.env.REACT_APP_ZOMATO_API_KEY
          }
        })
        .then(r => r.json())
        .then(resp => {
          console.log(resp)
        })
        
        this.setState({
          i: this.state.i + 20
        }) 
    
      }
    
      
      backPage = () => {
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=${this.state.i-20}&count=20`, {
          headers: {
            Accept: "application/json",
            "User-Key": process.env.REACT_APP_ZOMATO_API_KEY
          }
        })
        .then(r => r.json())
        .then(resp => {
          console.log(resp)
        })
        
        this.setState({
          i: this.state.i - 20
        }) 
    
      }


    render(){

        return( 
            <div>

                {this.state.i === 0 
                ? 
                 <button onClick={this.nextPage}> Next</button>
                : 
                <div>
                    <button onClick={this.backPage}> back</button>
                    <button onClick={this.nextPage}> Next</button>
                </div>
                }

               
            </div>

        )
    }
}


export default StorePages 






