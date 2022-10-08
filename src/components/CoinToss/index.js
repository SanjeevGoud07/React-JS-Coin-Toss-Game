// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    Img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  Heads = () => {
    this.setState(prevState => {
      console.log('Heads')
      return {count: prevState.count + 1, heads: prevState.heads + 1}
    })
  }

  Tails = () => {
    this.setState(prevState => {
      console.log('Tails')
      return {count: prevState.count + 1, tails: prevState.tails + 1}
    })
  }

  Clicked = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        Img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })

      this.Heads()
    } else {
      this.setState({
        Img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.Tails()
    }
  }

  render() {
    const {Img, count, heads, tails} = this.state
    return (
      <div className="container">
        <div className="Box">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="Para">Heads (or) Tails</p>
          <img src={Img} className="Coin" alt="toss result" />
          <button type="button" className="btn" onClick={this.Clicked}>
            Toss Coin
          </button>
          <div className="Counts">
            <p className="total">Total: {count}</p>
            <p className="total">Heads: {heads}</p>
            <p className="total">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
