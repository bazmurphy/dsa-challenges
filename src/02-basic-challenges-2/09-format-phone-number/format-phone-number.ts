// export default function formatPhoneNumber(numbers: number[]): string {
//   let result = "";

//   for (let i = 0; i < numbers.length; i++) {
//     if (i === 0) {
//       result += "(" + numbers[i];
//     } else if (i === 2) {
//       result += numbers[i] + ") ";
//     } else if (i === 5) {
//       result += numbers[i] + "-";
//     } else {
//       result += numbers[i];
//     }
//   }

//   return result;
// }

export default function formatPhoneNumber(numbers: number[]): string {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6, 10).join("")}`;
}

// In terms of performance, the second implementation that uses template literals and array join method is likely to be more performant.
// This is because string concatenation in JavaScript can be inefficient due to the immutability of strings.
// Each time you concatenate strings, a new string is created.
// The second implementation, which uses template literals and join, creates an array of substrings and then joins them together.
// This approach is generally more efficient than manually concatenating strings, especially when dealing with a large number of concatenations.

// That being said, the performance difference might not be significant for small arrays or in scenarios where the function is not called frequently.
// In many cases, the difference in performance between these two implementations may not be noticeable, and other factors such as code readability and maintainability may be more important.

// In the first implementation, the function iterates over each element of the numbers array once, and for each element, it performs a constant amount of work (appending characters to the result string). Therefore, the time complexity is O(n), where n is the length of the numbers array.

// In the second implementation, the function uses the slice and join methods, both of which have a time complexity of O(k), where k is the size of the resulting slice or joined string.
// In this case, each slice and join operation processes a constant number of elements, so the overall time complexity is still O(n), where n is the length of the numbers array.

// export default function formatPhoneNumber(numbers: number[]): string {
//   const areaCode = numbers.slice(0, 3).join("");
//   const prefix = numbers.slice(3, 6).join("");
//   const lineNumber = numbers.slice(6).join("");

//   return `(${areaCode}) ${prefix}-${lineNumber}`;
// }

// In terms of memory usage, the third implementation might be slightly more memory-efficient because it creates three separate variables (areaCode, prefix, and lineNumber) rather than creating three slices within the template literal.
// However, the difference is likely to be minimal, and modern JavaScript engines are optimized to handle such operations efficiently.

// export default function formatPhoneNumber(numbers: number[]): string {
//   const formatted = numbers.join();
//   return `(${formatted.substring(0, 3)}) ${formatted.substring(
//     3,
//     6,
//   )}-${formatted.substring(6)}`;
// }
