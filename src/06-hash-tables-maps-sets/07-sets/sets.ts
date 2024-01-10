// Create a new Set
const nameSet = new Set(["John", "Jane", "Joe"]);

console.log(nameSet);
// Set(3) { 'John', 'Jane', 'Joe' }

// If we initialise it with duplicate values
const nameSet2 = new Set(["John", "Jane", "Joe", "Jane", "Joe"]);
// Then it only populates with unique values
console.log(nameSet2);
// Set(3) { 'John', 'Jane', 'Joe' }

// Add a value to the Set
// with .add()
// takes in the value

nameSet.add("Jack");
nameSet.add("Jill");

console.log(nameSet);
// Set(5) { 'John', 'Jane', 'Joe', 'Jack', 'Jill' }

// Check for a value in the Set
// with .has()
// takes in the value
console.log(nameSet.has("Jack"));
// true

// Deleting a value from the Set
// with .delete()
// takes in the value
nameSet.delete("Jack");
// We can see "Jack" was removed:
console.log(nameSet);
// Set(4) { 'John', 'Jane', 'Joe', 'Jill' }

// Get the Size of a Set (similar to .length)
console.log(nameSet.size);
// 4

// Get all the Values from the Set
// with .values()
console.log(nameSet.values());
// [Set Iterator] { 'John', 'Jane', 'Joe', 'Jill' }

// Looping through a Set
for (const value of nameSet) {
  console.log(value);
}
// John
// Jane
// Joe
// Jill

// Convert a Set to an Array
const nameArray = Array.from(nameSet);
console.log(nameArray);
// [ 'John', 'Jane', 'Joe', 'Jill' ]

// Delete all values from a Set
// with .clear()
nameSet.clear();
