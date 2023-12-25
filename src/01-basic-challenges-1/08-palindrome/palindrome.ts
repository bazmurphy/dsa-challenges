export default function isPalindrome(str: string): boolean {
  // const sanitised = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

  const sanitised = str
    .toLowerCase()
    .split("")
    .map((char) => (validCharacters.includes(char) ? char : ""))
    .join("");

  return sanitised === sanitised.split("").reverse().join("");
}
