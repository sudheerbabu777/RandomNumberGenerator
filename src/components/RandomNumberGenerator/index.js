// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    this.setState(prevState => ({
      number: prevState.number + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="value">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
