import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  render() {
    return (
      <button className="square" style={{ 'width':'40px', 'height':'40px' }} onClick={this.props.handleMove}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.board[i]} handleMove={() => this.props.handleMove(i)} />;
  }

  render() {
    const { winner, currentPlayer } = this.props
    const status = winner != null ? `${winner} has won!` : 'Next player: ' + currentPlayer;

    return (
      <div>
        <div className="status">{status}</div>
        <button onClick={this.props.handleReset}>Reset</button>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  state = {
    board: Array(9).fill(""),
    currentPlayer: "X",
    winner: null
  }
  
  handleReset = _ => {
    this.setState({
      board: Array(9).fill(""),
      winner: null
    })
  }
  
  handleMove = i => {
    const { board, currentPlayer, winner } = this.state

    if (board[i] === "" && winner === null) {
      let newBoard = board
      newBoard[i] = currentPlayer
      
      this.checkForWinner(newBoard)
    }
  }
  
  checkForWinner = newBoard => {
    const { currentPlayer } = this.state
    const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    // for (let i = 0; winningCombos.length; i++) { // This should not work but it works... Missing condition in the middle
    for (let i = 0; i < winningCombos.length; i++) {
      const [a,b,c] = winningCombos[i];
      
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        this.setState({
          winner: currentPlayer
        })
      } else {
        this.setState({
          board: newBoard,
          currentPlayer: currentPlayer === "X" ? "O" : "X"
        })
      }
    }
  }
  
  render() {
    const { board, currentPlayer, winner } = this.state;
    
    return (
      <div className="game" style={{marginLeft: "50px"}}>
        <div className="game-board">
          <Board 
            board={board} 
            handleMove={this.handleMove} 
            handleReset={this.handleReset}
            winner={winner} 
            currentPlayer={currentPlayer} 
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);