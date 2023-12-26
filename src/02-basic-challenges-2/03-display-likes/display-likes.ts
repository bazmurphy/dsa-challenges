export default function displayLikes(names: string[]): string {
  let listOfNames = "";

  if (names.length === 0) {
    listOfNames = "no one";
  } else if (names.length === 1) {
    listOfNames = names[0];
  } else if (names.length === 2) {
    listOfNames = `${names[0]} and ${names[1]}`;
  } else if (names.length === 3) {
    listOfNames = `${names[0]}, ${names[1]} and ${names[2]}`;
  } else if (names.length > 3) {
    listOfNames = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
  }

  return `${listOfNames} like${names.length < 2 ? "s" : ""} this`;
}
