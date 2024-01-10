// export default function phoneNumberDirectory(
//   phoneNumbers: string[],
// ): Map<string, string> {
//   const phoneNumberMap = new Map();

//   for (let i = 0; i < phoneNumbers.length; i++) {
//     let name: string = "";
//     let number: string = "";
//     let colonReached = false;

//     for (let j = 0; j < phoneNumbers[i].length; j++) {
//       if (phoneNumbers[i][j] === ":") {
//         colonReached = true;
//         continue;
//       }

//       if (!colonReached) {
//         name += phoneNumbers[i][j];
//       } else {
//         number += phoneNumbers[i][j];
//       }
//     }

//     if (!phoneNumberMap.has(name)) {
//       phoneNumberMap.set(name, number);
//     }
//   }

//   return phoneNumberMap;
// }

export default function phoneNumberDirectory(
  phoneNumbers: string[],
): Map<string, string> {
  const phoneNumberMap = new Map();

  for (let i = 0; i < phoneNumbers.length; i++) {
    const [name, number] = phoneNumbers[i].split(":");

    if (!phoneNumberMap.has(name)) {
      phoneNumberMap.set(name, number);
    }
  }

  return phoneNumberMap;
}

// Time Complexity:
// The first implementation uses nested loops to iterate over each character in the input strings. The inner loop checks for the colon to determine when to start extracting the number. This results in a time complexity of O(n*m), where n is the number of phone numbers, and m is the average length of the phone numbers.
// The second implementation, on the other hand, uses the split method to directly split each input string into an array of two elements based on the colon. This eliminates the need for nested loops and results in a time complexity of O(n).

// Space Complexity:
// The first implementation creates individual variables for the name and number, potentially causing unnecessary string concatenation and increased space complexity.
// The second implementation uses array destructuring to directly extract the name and number from the split result. This results in cleaner and more concise code, potentially saving on space complexity.

// export default function phoneNumberDirectory(
//   phoneNumbers: string[],
// ): Map<string, string> {
//   const directory = new Map();

//   for (const entry of phoneNumbers) {
//     const [name, phoneNumber] = entry.split(":");
//     directory.set(name, phoneNumber);
//   }

//   return directory;
// }
