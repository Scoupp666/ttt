import { useState } from "react";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [currPlayer, setCurrPlayer] = useState("O");
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setBoard([
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
    setCurrPlayer("O");
    setGameOver(false);
  };

  const setTile = (r: number, c: number) => {
    if (gameOver || board[r][c] !== " ") return;

    const newBoard = board.map((row, rowIndex) =>
      row.map((tile, colIndex) =>
        rowIndex === r && colIndex === c ? currPlayer : tile
      )
    );
    setBoard(newBoard);
    setCurrPlayer(currPlayer === "O" ? "X" : "O");
    checkWinner(newBoard);
  };

  const checkWinner = (board: string[][]) => {
    // Revisar filas
    for (let r = 0; r < 3; r++) {
      if (board[r][0] === board[r][1] && board[r][1] === board[r][2] && board[r][0] !== " ") {
        setGameOver(true);
        return;
      }
    }
    // Revisar columnas
    for (let c = 0; c < 3; c++) {
      if (board[0][c] === board[1][c] && board[1][c] === board[2][c] && board[0][c] !== " ") {
        setGameOver(true);
        return;
      }
    }
    // Diagonal principal
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== " ") {
      setGameOver(true);
      return;
    }
    // Diagonal inversa
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== " ") {
      setGameOver(true);
      return;
    }
  };

  return (
    <div className="App">
      <h1>Gato</h1>
      <hr />
      <div id="board">
        {board.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              id={`${rowIndex}-${colIndex}`}
              className={`tile ${
                rowIndex < 2 ? "horizontal-line" : ""
              } ${colIndex < 2 ? "vertical-line" : ""}`}
              onClick={() => setTile(rowIndex, colIndex)}
            >
              {tile}
            </div>
          ))
        )}
      </div>
      {gameOver && <button onClick={resetGame}>Reiniciar</button>}
    </div>
  );
};

export default App;
