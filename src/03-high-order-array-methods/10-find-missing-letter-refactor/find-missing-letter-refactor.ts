// export default function findMissingLetter(arr: string[]): string {
//   const lettersAsCharCodes = arr.map((letter) => letter.charCodeAt(0));

//   const charCodeBeforeMissing = lettersAsCharCodes.find(
//     (charCode, index, array) => {
//       if (array[index + 1]) {
//         return charCode + 1 !== array[index + 1];
//       }
//     },
//   );

//   if (!charCodeBeforeMissing) {
//     return "";
//   }

//   const missingLetter = String.fromCharCode(charCodeBeforeMissing + 1);

//   return missingLetter;
// }

// export default function findMissingLetter(arr: string[]): string {
//   let start = arr[0].charCodeAt(0);

//   const missingCharCode = arr
//     .slice(1)
//     .map((char) => char.charCodeAt(0))
//     .find((current) => {
//       if (current - start > 1) {
//         return true;
//       }

//       start = current;
//       return false;
//     });

//   return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "1";
// }

export default function findMissingLetter(arr: string[]): string {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) {
      return false;
    }

    const prevCharCode = arr[index - 1].charCodeAt(0);

    const currentCharCode = char.charCodeAt(0);

    return currentCharCode - prevCharCode > 1;
  })[0];

  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : "";
}
