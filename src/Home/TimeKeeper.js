import React from 'react'

class TimeKeeper extends React.Component{
    state = {
        curTime: ""
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 1000)
      }

    render() {
        return (
            <div>
                 <h1 className="timekeeper">{this.state.curTime}</h1>
            </div>
        );
    }
}

export default TimeKeeper
