import React, { Component } from "react";
import dataCards from '../CardArray.json';
import Card from "./Card"

class Game extends Component{
    state = {
        cards: dataCards,
        score: 0,
        topScore: 0
    } 
    handleClick = (id) => {
        var cards = this.state.cards
        var score = this.state.score
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id === id){
                if (cards[i].click === false){
                    cards[i].click = true;
                    score++;
                    var cardsShuff = this.shuffleData(cards)
                }
                else {
                    var topScore = this.state.topScore
                    if (score > topScore){
                        this.setState({topScore: score, score: 0, cards: dataCards})
                        //if return doesn't work ... we need to stop the for loop some other way
                        //if this doesn't work, change the for loop to for while
                        return
                    }
                }
            }
        }
        this.setState({cards: cardsShuff, score: score})
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

    render(){
        return (<div>
            <h1>Game Component</h1>
            {this.state.cards.map(card => (
                <Card 
                    id={card.id}
                    key={card.id}
                    image={card.image}
                />
            ))}
            {/* {this.state.cards.map((card,key) => (
                <Card 
                card = {card}
                key = {key}/>
            ))} */}
        </div>)
    }
}

export default Game;