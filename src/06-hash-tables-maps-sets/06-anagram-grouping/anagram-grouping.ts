export default function anagramGrouping(words: string[]): string[][] {
  const anagramMap = new Map();

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i].toLowerCase();
    const sortedWord = words[i].toLowerCase().split("").sort().join("");

    if (!anagramMap.has(sortedWord)) {
      anagramMap.set(sortedWord, [currentWord]);
    } else {
      // anagramMap.set(sortedWord, anagramMap.get(sortedWord).push(currentWord));
      // (!) instead you can .get() and push directly on to it
      anagramMap.get(sortedWord).push(currentWord);
    }
  }

  return Array.from(anagramMap.values());
}
