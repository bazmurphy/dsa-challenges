// Map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

// .get() gets the value
// .set() sets the value, takes in a key then a value
// .entries() returns an object of arrays, with [key, value]

export default function findFirstNonRepeatingCharacter(str: string) {
  const characterMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (characterMap.get(str[i])) {
      characterMap.set(str[i], characterMap.get(str[i]) + 1);
    } else {
      characterMap.set(str[i], 1);
    }
  }

  for (const [key, value] of characterMap.entries()) {
    if (value === 1) {
      return key;
    }
  }

  return null;
}
