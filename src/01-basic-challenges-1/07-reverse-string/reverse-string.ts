export default function reverseString(str: string): string {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// export default function reverseString(str: string): string {
//   return str.split("").reverse().join("");
// }
