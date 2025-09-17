import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 10}
    })
  }

  applyBrake = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      const newCount = prevState.count - 10
      return {count: newCount >= 0 ? newCount : 0}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>

        <h1 className="heading">Speed is {count}mph</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />

        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>

        <div>
          <button className="button" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="button" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
