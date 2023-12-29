export default function countVowels(str: string): number {
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// export default function countVowels(str: string): number {
//   const vowels = "aieou";

//   let vowelCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       vowelCount++;
//     }
//   }

//   return vowelCount;
// }
