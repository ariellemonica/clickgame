// import React from 'react';
import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import GameWrapper from './components/GameWrapper';
import cardsData from '../src/CardArray.json';
import Card from './components/Card';

class App extends Component {
  state = {
    cards: cardsData,
    score: 0,
    winStatus: ""
    // topScore: 0
  };

  handleClick = (id) => {
    var cards = this.state.cards
    var score = this.state.score
    // var topScore = this.state.topScore
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === id) {
        if (cards[i].click === false) {
          cards[i].click = true;
          cards[i].clickedNum++;
          score++;
          var cardsShuff = this.shuffleData(cards);
          this.setState({ cards: cardsShuff, score: score })
          this.checkScore(score)
        } else if (cards[i].click === true) {
          cards[i].clickedNum++;
        }
      }
    }
    // this.setState({ cards: cardsShuff, score: score })
    // this.checkScore(score)
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === id) {
        if (cards[i].clickedNum > 2){
          this.gameLost();
        }
      }
    }
  }

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  checkScore = (score) => {
    if (score === 12) {
      this.setState({ winStatus: "You won, Pokedexter!" })
    }
  }

  gameLost = () => {
    // set winStatus to some sort of try again message
    this.setState({ score: 0, winStatus: "You chose that Pokemon already, start again from Pallet Town!"})
  }

  handleClickReset = () => {
    this.setState(
      {
        cards: cardsData,
        score: 0,
        winStatus: ""
      }
    )
  }


  render() {
    return (
      <>
        <Header />
        <p>Current Score: {this.state.score}</p>
        <p>{this.state.winStatus}</p>
        <button onClick={this.handleClickReset}>Reset Game</button>
        <GameWrapper>
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              name={card.name}
              clickedNum={card.clickedNum}
              handleClick={this.handleClick}
            />
          ))}
        </GameWrapper>
      </>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* <Game /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
