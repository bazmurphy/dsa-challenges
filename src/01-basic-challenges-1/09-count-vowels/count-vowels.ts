export default function countVowels(str: string): number {
  const vowels = "aieou";

  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelCount++;
    }
  }

  return vowelCount;
}
