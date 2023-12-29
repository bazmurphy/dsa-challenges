// export default function areAllCharactersUnique(str: string): boolean {
//   if (str === "") {
//     return true;
//   }

//   const strMap: Record<string, boolean> = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (strMap[char]) {
//       return false;
//     }

//     strMap[char] = true;
//   }

//   return true;
// }

export default function areAllCharactersUnique(str: string): boolean {
  const charSet: Set<string> = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charSet.has(char)) {
      return false;
    }

    charSet.add(char);
  }

  return true;
}

// export default function areAllCharactersUnique(str: string): boolean {
//   if (str === "") {
//     return true;
//   }

//   return str.length === new Set(str.split("")).size;
// }
