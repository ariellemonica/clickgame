// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Game from './components/Game';
import GameWrapper from './components/GameWrapper';
import cards from '../src/CardArray.json';
import Card from './components/Card';

class App extends Component {
  state = {
    cards
  };

  render() {
    return (
      <>
        <Header />
        {/* <Game /> */}
        <GameWrapper> {this.state.cards.map(card => (
            <Card 
            id={card.id}
            key={card.id}
            image={card.image}
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
