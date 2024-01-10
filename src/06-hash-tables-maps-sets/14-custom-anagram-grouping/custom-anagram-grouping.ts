import HashTable from "./HashTable";

export default function anagramGrouping(words: string[]): string[][] {
  const hashTable = new HashTable();

  for (let currentWord of words) {
    currentWord = currentWord.toLowerCase();

    const currentWordSorted = currentWord
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    if (hashTable.has(currentWordSorted)) {
      (hashTable.get(currentWordSorted) as string[]).push(currentWord);
    } else {
      hashTable.set(currentWordSorted, [currentWord]);
    }
  }

  return hashTable.getValues() as string[][];
}
