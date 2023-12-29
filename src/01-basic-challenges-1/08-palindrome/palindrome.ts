export default function isPalindrome(str: string): boolean {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

  let sanitisedString = "";
  let sanitisedStringReversed = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (validCharacters.includes(char)) {
      sanitisedString += char;
      sanitisedStringReversed = char + sanitisedStringReversed;
    }
  }

  return sanitisedString === sanitisedStringReversed;
}

// export default function isPalindrome(str: string): boolean {
//   // const sanitised = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

//   const sanitised = str
//     .toLowerCase()
//     .split("")
//     .map((char) => (validCharacters.includes(char) ? char : ""))
//     .join("");

//   return sanitised === sanitised.split("").reverse().join("");
// }
