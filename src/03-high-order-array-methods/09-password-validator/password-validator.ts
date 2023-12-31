export default function validatePassword(password: string): boolean {
  if (
    password.trim().length >= 8 &&
    password !== password.toLowerCase() &&
    password !== password.toUpperCase() &&
    password.split("").some((character) => !isNaN(parseInt(character)))
  ) {
    return true;
  }
  return false;
}

// export default function validatePassword(password: string): boolean {
//   const isLengthValid = password.length >= 8;

//   const passwordSplit = password.split("");

//   const hasUpperCase = passwordSplit.some(
//     (char) => char === char.toUpperCase() && char !== char.toLowerCase(),
//   );

//   const hasLowerCase = passwordSplit.some(
//     (char) => char === char.toLowerCase() && char !== char.toUpperCase(),
//   );

//   const hasDigit = passwordSplit.some((char) => !isNaN(parseInt(char, 10)));

//   return isLengthValid && hasUpperCase && hasLowerCase && hasDigit;
// }
