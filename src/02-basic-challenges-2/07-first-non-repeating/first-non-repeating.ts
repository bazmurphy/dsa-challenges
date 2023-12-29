export default function findFirstNonRepeatingCharacter(
  str: string,
): string | null {
  const characterMap: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    if (characterMap[str[i]]) {
      characterMap[str[i]] += 1;
    } else {
      characterMap[str[i]] = 1;
    }
    // more concise way to achieve the above^ :
    // characterMap[str[i]] = (characterMap[str[i]] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (characterMap[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

// Map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

// .get() gets the value
// .set() sets the value, takes in a key then a value
// .entries() returns an object of arrays, with [key, value]

// export default function findFirstNonRepeatingCharacter(
//   str: string,
// ): string | null {
//   const characterMap = new Map();

//   for (let i = 0; i < str.length; i++) {
//     if (characterMap.get(str[i])) {
//       characterMap.set(str[i], characterMap.get(str[i]) + 1);
//     } else {
//       characterMap.set(str[i], 1);
//     }
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (characterMap.get(str[i]) === 1) {
//       return str[i];
//     }
//   }

//   return null;
// }
