import React, { Component } from 'react';
import './App.css';
import {Button, Row, Col} from 'react-bootstrap' ;
class App extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      turn: 'X',
      winner: false
    }
  }
  _reset(){
    this.setState({
      gameBoard: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      turn: 'X',
      winner: false
    });
  }

  _handleClick(index){
    let current = this.state.gameBoard;
    if(current[index]==='' && !this.state.winner){
      current[index] = this.state.turn;
      this.setState({turn: this.state.turn === 'X' ? 'O' : 'X',
      gameBoard: current,
      winner: this._isWin()
    }); 
    }
  }
  _isWin(){
    let symbols = this.state.gameBoard;
    let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let result = winningCombos.find((combo) => {
      return (symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]])});
    if(result){return this.state.turn}
    return false;   
  }
  render() {
    return (
      
      <div className="TicTacToe">
        <header className="App-header">
          <h1 className="App-title">Welcome to TicTacToe</h1>
        </header>
        
          <Row>
            <Col xs={9} >
            <div className="board"> 
              {this.state.gameBoard.map((value, index) => {
                  return(
                    <div className="square" key={index} onClick={() => this._handleClick(index)}>
                      <p>{value}</p>
                    </div>
                  )
              })}
            </div>  
            </Col> 
            <Col xs={3} className="rSide">
              <Button bsStyle="primary" bsSize="large" onClick={() => this._reset()}>reset</Button>
              {this.state.winner ? <p className="winner"><b>{`The winner is ${this.state.winner}`}</b></p> : <p className="turn"><b>Player {this.state.turn} turn</b></p>}
            </Col> 
          </Row>
      
        <footer>

        </footer>
      </div>
      
    );
  }
}

export default App;
