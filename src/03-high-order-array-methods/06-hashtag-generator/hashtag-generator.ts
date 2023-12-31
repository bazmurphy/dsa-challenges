// export default function generateHashtag(str: string): string | boolean {
//   if (!str || str.trim() === "" || str.length > 140) {
//     return false;
//   }

//   const hashTag = `#${str
//     .trim()
//     .split(" ")
//     .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//     .join("")}`;

//   if (hashTag.length > 140) {
//     return false;
//   }

//   return hashTag;
// }

// export default function generateHashtag(str: string): string | boolean {
//   if (str.trim() === "") {
//     false;
//   }

//   const words = str.trim().split(/\s+/); // represents one or more whitespace characters

//   const capitalizedWords = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1),
//   );

//   const hashtag = "#" + capitalizedWords.join("");

//   return hashtag.length > 140 ? false : hashtag;
// }

export default function generateHashtag(str: string): string | boolean {
  const hashtag = str.split(" ").reduce((tag, word) => {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}
