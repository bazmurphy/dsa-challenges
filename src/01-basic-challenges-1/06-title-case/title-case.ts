export default function titleCase(str: string): string {
  if (str.trim().length === 0) {
    return "";
  }

  let result = "";
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (currentWord === "") {
        currentWord += str[i].toUpperCase();
      } else {
        currentWord += str[i].toLowerCase();
      }
    } else {
      result += currentWord + " ";
      currentWord = "";
    }
  }

  result += currentWord;

  return result;
}

// export default function titleCase(str: string): string {
//   const words = str.toLowerCase().split(" ");

//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(" ");
// }

// export default function titleCase(str: string): string {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
//     .join(" ");
// }
