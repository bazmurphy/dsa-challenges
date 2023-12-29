// export default function findMissingLetter(arr: string[]): string {
//   if (arr.length === 0) {
//     return "";
//   }

//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   for (let i = 0; i < arr.length; i++) {
//     const alphabetIndex = alphabet.indexOf(arr[i]);
//     if (alphabet[alphabetIndex + 1] !== arr[i + 1]) {
//       return alphabet[alphabetIndex + 1];
//     }
//   }

//   return "";
// }

export default function findMissingLetter(arr: string[]): string {
  if (arr.length === 0) {
    return "";
  }

  for (let i = 0; i < arr.length; i++) {
    const charCode = arr[i].charCodeAt(0);
    if (String.fromCharCode(charCode + 1) !== arr[i + 1]) {
      return String.fromCharCode(charCode + 1);
    }
  }

  return "";
}
