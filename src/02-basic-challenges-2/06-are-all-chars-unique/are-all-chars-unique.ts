export default function areAllCharactersUnique(str: string): boolean {
  if (str === "") {
    return true;
  }

  return str.length === new Set(str.split("")).size;
}
