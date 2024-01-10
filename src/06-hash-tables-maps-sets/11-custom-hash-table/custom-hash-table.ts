export default class HashTable {
  // for TypeScript OOP we need to specify:
  private storage: Array<Array<[string, unknown]>>;
  private limit: number;

  // we limit the amount of key/value pairs
  // and give it a default of 14
  // but when you instantiate the class you can provide it another limit
  constructor(limit = 14) {
    // this is where everything will be stored in this array
    this.storage = [];
    // set it to the limit that is passed in
    this.limit = limit;
  }

  // the hash function:
  // takes an input which is our key
  // and converts it to a fixed sized value (typically a number)
  // and this number serves as the index where the associated data will be stored in the hash table
  // there are a lot of different hashing algorithms: sha256 etc.
  // we will write a simple hash function that:
  // adds up the character codes, into a total and then modulo that by the size of the hash table
  // the more in depth and advance your hash function is the less chance of a collision

  // in JavaScript we would do _hash - the underscore to denote private method
  // in Typescipt we use the private keyword

  // hash() it takes in the key and the max (which is essentially the limit
  private hash(key: string, max: number) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % max;
  }

  // set a value in the hash table
  set(key: string, value: unknown) {
    // we create an index using the _hash method above
    const index = this.hash(key, this.limit);

    // if this index is not set, then we set it
    if (this.storage[index] === undefined) {
      // each index value is an array, containing multiple [ key, value ] pairs (which are just a key and value in an array)
      this.storage[index] = [[key, value]];
    } else {
      // if index does exist...
      let inserted = false;

      // loop over the [ key, value ] pairs in that bucket
      for (let i = 0; i < this.storage[index].length; i++) {
        // check to see if the key exists, if it does update the value
        // [ key, value ] so [i][0] is the key, [i][1] is the value

        // if the key already exists
        if (this.storage[index][i][0] === key) {
          // update the key's value with the value that was passed into set()
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      // if the key doesn't exist
      if (inserted === false) {
        // then add on the [ key, value ]
        this.storage[index].push([key, value]);
      }
    }
  }

  // get a value from the hash table
  get(key: string) {
    const index = this.hash(key, this.limit);

    // if there is no entry at that index then return undefined
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      // if a key exists on that index then return it's value
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  // remove a value in the hash table
  remove(key: string) {
    const index = this.hash(key, this.limit);

    // (!) "delete" does not remove the item it just replaces it with "undefined"
    if (this.storage[index]) {
      // we need to check if it is the only [key, value] pair in the bucket and if the keys are equal
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        // delete the bucket
        delete this.storage[index];
      } else {
        // in this case there are more than one [key, value] pair in the bucket
        // so loop through them and delete the correct [key, value]
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i];
          }
        }
      }
    }
  }

  // check if a key exists in the hash table
  has(key: string) {
    const index = this.hash(key, this.limit);

    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return true;
        }
      }
    }

    return false;
  }

  // empty the hash table
  clear() {
    this.storage = [];
  }

  // print the hash table
  printTable() {
    if (this.storage.length === 0) {
      console.log("HashMap | empty");
      return;
    }
    for (let i = 0; i < this.storage.length; i++) {
      // undefined is printed as null by JSON.stringify
      console.log(
        `HashMap | index: ${i} | bucket: ${JSON.stringify(this.storage[i])}`,
      );
    }
  }
}

// // instantiate a HashTable
// const myHashTable = new HashTable();

// const result = myHashTable.hash("John", myHashTable.limit);
// // Property 'hash' is private and only accessible within class 'HashTable'.ts(2341)

// // test the printTable method
// myHashTable.printTable();

// // test the set method
// myHashTable.set("Baz", "012-345-6789");
// myHashTable.set("Bill", "000-111-2222");
// myHashTable.set("Ben", "999-888-7777");

// myHashTable.printTable();

// // test the get method
// console.log(myHashTable.get("Baz"));
// console.log(myHashTable.get("Bob"));

// // test the remove method
// myHashTable.remove("Bill");
// myHashTable.printTable();

// console.log(myHashTable.has("Baz"));
// console.log(myHashTable.has("Bob"));

// // test the clear method
// myHashTable.clear();
// myHashTable.printTable();
