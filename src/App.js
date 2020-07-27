// import React from 'react';
import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
// import Game from './components/Game';
// import Winner from './components/Winner'
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
          score++;
          // topScore++;
          var cardsShuff = this.shuffleData(cards);
        }
        // else {
        //   topScore = this.state.topScore
        //   score = 0;
        //   cardsShuff = this.shuffleData(cardsData)
        // }
        // else {
        //   topScore = this.state.topScore
        //   if (score > topScore) {
        //     this.setState({ topScore: score, score: 0, cards: cards })
        //     //if return doesn't work ... we need to stop the for loop some other way
        //     //if this doesn't work, change the for loop to for while
        //     return
        //   }
        // }
      }
    }
    this.setState({ cards: cardsShuff, score: score })

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


  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Header />
        <p>Current Score: {this.state.score}</p>
        <GameWrapper>
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              name={card.name}
              handleClick={this.handleClick}
            />
          ))}
        </GameWrapper>
        <Footer />
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
