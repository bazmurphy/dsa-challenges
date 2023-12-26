export default function findMissingLetter(arr: string[]): string {
  if (arr.length === 0) {
    return "";
  }

  for (let i = 0; i < arr.length; i++) {
    if (String.fromCharCode(arr[i].charCodeAt(0) + 1) !== arr[i + 1]) {
      return String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
  }

  return "";
}
