export default function highestScoringWord(str: string): string | void {
  const splitString = str.split(" ");

  const scores = splitString.map((word) =>
    word.split("").reduce((acc, cv) => acc + cv.charCodeAt(0) - 96, 0),
  );

  const highestScore = Math.max(...scores);

  const indexOfHighestScore = scores.findIndex(
    (score) => score === highestScore,
  );

  return splitString[indexOfHighestScore];
}

// export default function highestScoringWord(str: string): string | void {
//   const words = str.split(" ");
//   let maxScore = 0;
//   let maxScoreWord = "";

//   words.forEach((word) => {
//     const score = word
//       .split("")
//       .reduce((acc, cv) => acc + cv.charCodeAt(0) - 96, 0);

//     if (score > maxScore) {
//       maxScore = score;
//       maxScoreWord = word;
//     }
//   });

//   return maxScoreWord;
// }
