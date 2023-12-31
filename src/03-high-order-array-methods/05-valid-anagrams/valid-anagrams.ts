// export default function validAnagrams(str1: string, str2: string): boolean {
//   function adjustedString(str: string) {
//     return str
//       .split("")
//       .sort((a, b) => a.localeCompare(b))
//       .join("");
//   }

//   return adjustedString(str1) === adjustedString(str2);
// }

export default function validAnagrams(str1: string, str2: string): boolean {
  function freqCount(str: string): Record<string, number> {
    return str.split("").reduce((acc: Record<string, number>, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  }

  const freqCount1 = freqCount(str1);
  const freqCount2 = freqCount(str2);

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char],
  );
}
