export class RPSGame {
    private scoreP1: number;
    private scoreP2: number;
  
    constructor(scoreP1: number, scoreP2: number) {
      this.scoreP1 = scoreP1;
      this.scoreP2 = scoreP2;
      console.log("Scores", this.scoreP1, this.scoreP2);
    }
  
    updateScore(player: number, amount: number): void {
      if (player === 1) {
        this.scoreP1 += amount;
      } else {
        this.scoreP2 += amount;
      }
    }
  
    getScore(player: number): number {
      return player === 1 ? this.scoreP1 : this.scoreP2;
    }
  
    getScores(): [number, number] {
      return [this.scoreP1, this.scoreP2];
    }
  
    generateComputerChoice(): string {
      const choices = ["piedra", "papel", "tijera"];
      const randomNumber = Math.floor(Math.random() * 3);
      return choices[randomNumber];
    }
  
    getResult(computerChoice: string, userChoice: string): string {
      if (computerChoice === userChoice) {
        return "Empate!";
      }
  
      if (
        (computerChoice === "tijera" && userChoice === "piedra") ||
        (computerChoice === "piedra" && userChoice === "papel") ||
        (computerChoice === "papel" && userChoice === "tijera")
      ) {
        this.updateScore(1, 1);
        return "Ganaste!";
      }
  
      this.updateScore(2, 1);
      return "Perdiste!";
    }
  }
  