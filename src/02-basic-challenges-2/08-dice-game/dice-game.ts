interface Simulation {
  dice1: number;
  dice2: number;
  sum: number;
  result: Result;
}

type Result = "win" | "lose" | "roll again";

export default function diceGameSimulation(
  numSimulations: number,
): Simulation[] {
  function diceRoll(): number {
    return Math.ceil(Math.random() * 6);
  }

  const simulations = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = diceRoll();
    const dice2 = diceRoll();

    const sum = dice1 + dice2;

    // const winingNumbers = [7, 11];
    // const losingNumbers = [2, 3, 12];

    // let result: Result = "roll again";

    // if (winingNumbers.includes(sum)) {
    //   result = "win";
    // } else if (losingNumbers.includes(sum)) {
    //   result = "lose";
    // }

    // ^this involves higher order array methods which affect the time complexity

    let result: Result = "roll again";

    if (sum === 7 || sum == 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    }

    simulations.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return simulations;
}
