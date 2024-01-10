// Create a new Map
const nameMap = new Map([
  [1, "John"],
  [2, "Jack"],
  [3, "Jill"],
]);

console.log(nameMap);
// Map(3) { 1 => 'John', 2 => 'Jack', 3 => 'Jill' }

// Different Types of Keys:
// with Maps you can use any data type as the key: string, number, boolean, function, object etc

const myFunction = () => {};
const myObject = {};

const map2 = new Map([
  ["name", "John"],
  [1, "Number One"],
  [true, "Really True"],
  [null, "null"],
  [myFunction, "My Function"],
  [myObject, "My Object"],
]);

console.log(map2);
// Map(6) {
//   'name' => 'John',
//   1 => 'Number One',
//   true => 'Really True',
//   null => 'null',
//   [Function: myFunction] => 'My Function',
//   {} => 'My Object'
// }

// Get Values
// the .get() method
// takes in the key
console.log(nameMap.get(1));
// John

console.log(map2.get(myFunction));
// My Function

console.log(map2.get(myObject));
// My Object

// Set Values
// the .set() method
// takes in the key and the value
nameMap.set(4, "Mike");
nameMap.set(5, "Sarah");

console.log(nameMap);
// Map(5) {
//   1 => 'John',
//   2 => 'Jack',
//   3 => 'Jill',
//   4 => 'Mike',
//   5 => 'Sarah'
// }

// Check Values
// the .has() method
// takes in the key

console.log(nameMap.has(1));
// true
console.log(nameMap.has(10));
// false

// Delete Values
// the .delete() method
// takes in the key
nameMap.delete(1);
console.log(nameMap.has(1));
// false

// Get the Size (similar to .length)
console.log(nameMap.size);
// 4

// Iterating over a Map

for (const [key, value] of nameMap) {
  console.log(key, value);
}
// 2 Jack
// 3 Jill
// 4 Mike
// 5 Sarah

// note the value is first, and the key second
nameMap.forEach((value, key) => console.log(key, value));
// 2 Jack
// 3 Jill
// 4 Mike
// 5 Sarah

// Get the Keys
console.log(nameMap.keys());
// [Map Iterator] { 2, 3, 4, 5 }

// Get the Values
console.log(nameMap.values());
// [Map Iterator] { 'Jack', 'Jill', 'Mike', 'Sarah' }

// Clear the Entire Map
nameMap.clear();
console.log(nameMap.size);
// 0
