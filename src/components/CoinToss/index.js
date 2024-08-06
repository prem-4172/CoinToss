// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    let {heads, tails} = this.state
    let newImageUrl
    if (tossResult === 0) {
      heads += 1
      newImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      tails += 1
      newImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    this.setState(prevState => ({
      total: prevState.total + 1,
      heads,
      tails,
      imageUrl: newImageUrl,
    }))
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="coin" className="image" />
          <button type="button" className="button-1" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="head-tail">
            <p className="tail">Total:{total}</p>
            <p className="tail">Head:{heads}</p>
            <p className="tail">Tail:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
