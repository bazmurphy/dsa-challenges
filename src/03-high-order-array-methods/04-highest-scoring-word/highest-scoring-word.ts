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

// export default function highestScoringWord(str: string): string | void {
//   const words = str.split(" ");

//   const scores = words.map((word) => {
//     let score = 0;
//     for (const letter of word) {
//       score += letter.charCodeAt(0);
//     }
//     return score;
//   });

//   let highestScore = 0;
//   let highestIndex = 0;

//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > highestScore) {
//       highestScore = scores[i];
//       highestIndex = i;
//     }
//   }

//   return words[highestIndex];
// }

// export default function highestScoringWord(str: string): string | void {
//   const words = str.split(" ");

//   const scores = words.map((word) => {
//     return Array.from(word).reduce(
//       (score, letter) => score + letter.charCodeAt(0) - 96,
//       0,
//     );
//   });

//   const highestScore = Math.max(...scores);
//   const highestIndex = scores.indexOf(highestScore);

//   return words[highestIndex];
// }
