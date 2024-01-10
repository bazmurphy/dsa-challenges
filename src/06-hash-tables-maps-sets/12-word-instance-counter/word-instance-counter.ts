import HashTable from "./hash-table";

export default function wordInstanceCounter(str: string, word: string): number {
  const allWords = str.toLowerCase().split(/\W+/);
  const targetWord = word.toLowerCase();

  const hashTable = new HashTable();

  for (const currentWord of allWords) {
    if (hashTable.has(currentWord)) {
      hashTable.set(currentWord, (hashTable.get(currentWord) as number) + 1);
    } else {
      hashTable.set(currentWord, 1);
    }
  }

  const wordInstanceCount = hashTable.get(targetWord) as number;

  return wordInstanceCount;
}
