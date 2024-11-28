import React, { useState } from "react";
import { RPSGame } from "./main";

const RockPaperScissors: React.FC = () => {
  const [game] = useState(new RPSGame(0, 0));
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const handleChoice = (userChoice: string) => {
    const computerChoice = game.generateComputerChoice();
    const gameResult = game.getResult(computerChoice, userChoice);

    const [pScore, cScore] = game.getScores();
    setResult(gameResult);
    setPlayerScore(pScore);
    setComputerScore(cScore);
  };

  return (
    <div className="contenedorP">
      <div className="contenedor">
        <div className="contenido">
          <button
            id="piedra"
            className="choice-button"
            onClick={() => handleChoice("piedra")}
          >
            <img
              className="img"
              src="https://cementostorices.com/assets/images/jpg/construccion/tipos-de-piedras/piedra-pizarra-sobre-fondo-blanco_960x450.jpg"
              alt=""
            />
            piedra
          </button>
          <button
            id="papel"
            className="choice-button"
            onClick={() => handleChoice("papel")}
          >
            <img
              className="img"
              src="https://img.freepik.com/foto-gratis/textura-papel-blanco_1194-2301.jpg"
              alt=""
            />
            papel
          </button>
          <button
            id="tijera"
            className="choice-button"
            onClick={() => handleChoice("tijera")}
          >
            <img
              className="img"
              src="https://static.vecteezy.com/system/resources/previews/015/080/730/non_2x/open-scissors-blades-transparent-png.png"
              alt=""
            />
            tijera
          </button>
        </div>
      </div>
      <br />
      <br />
      <h1>VS</h1>
      <br />
      <br />
      <div className="contenedor2">
        <div className="contenido">
          <button>
            <img
              className="img"
              src="https://cementostorices.com/assets/images/jpg/construccion/tipos-de-piedras/piedra-pizarra-sobre-fondo-blanco_960x450.jpg"
              alt=""
            />
            piedra
          </button>
          <button>
            <img
              className="img"
              src="https://img.freepik.com/foto-gratis/textura-papel-blanco_1194-2301.jpg"
              alt=""
            />
            papel
          </button>
          <button>
            <img
              className="img"
              src="https://static.vecteezy.com/system/resources/previews/015/080/730/non_2x/open-scissors-blades-transparent-png.png"
              alt=""
            />
            tijera
          </button>
        </div>
      </div>
      <br />
      <br />
      <h1 id="result">Resultado: {result}</h1>
      <h1 id="Pscore">Jugador: {playerScore}</h1>
      <h1 id="Cscore">Computadora: {computerScore}</h1>
    </div>
  );
};

export default RockPaperScissors;

