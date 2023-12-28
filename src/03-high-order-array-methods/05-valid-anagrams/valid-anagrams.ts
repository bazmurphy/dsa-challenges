export default function validAnagrams(str1: string, str2: string) {
  function adjustedString(str: string) {
    return str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  }

  return adjustedString(str1) === adjustedString(str2);
}
