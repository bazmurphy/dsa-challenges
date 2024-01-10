export default function wordFrequencyCounter(str: string): Map<string, number> {
  const wordFrequencyMap = new Map();

  // split() has a time complexity of O(n), where n is the length of the input string.
  // It's a direct string manipulation method and tends to be faster.

  // match() with a regular expression can be slower
  // because regular expressions are more computationally expensive.

  // "\b" word boundary
  // const words = str.toLowerCase().match(/\b[a-zA-Z]+\b/g);

  // "\W+" matches one or more non-word characters (anything that is not a letter, digit, or underscore).
  const words = str.toLowerCase().split(/\W+/);

  if (!words || words.length < 1) {
    return wordFrequencyMap;
  }

  for (let i = 0; i < words?.length; i++) {
    if (words[i] === "") {
      continue;
    }
    if (wordFrequencyMap.has(words[i])) {
      wordFrequencyMap.set(words[i], wordFrequencyMap.get(words[i]) + 1);
    } else {
      wordFrequencyMap.set(words[i], 1);
    }
  }

  return wordFrequencyMap;
}
