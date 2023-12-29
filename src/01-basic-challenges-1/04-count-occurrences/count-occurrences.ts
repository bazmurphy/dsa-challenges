export default function countOccurrences(str: string, char: string): number {
  let occurrences = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      occurrences++;
    }
  }

  return occurrences;
}

// export default function countOccurrences(str: string, char: string): number {
//   return str.split(char).length - 1;
// }
