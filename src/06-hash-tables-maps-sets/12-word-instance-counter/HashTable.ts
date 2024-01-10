export default class HashTable {
  private storage: Array<Array<[string, unknown]>>;
  private limit: number;

  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

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
    const index = this.hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  // get a value from the hash table
  get(key: string) {
    const index = this.hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    } else {
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

    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index];
      } else {
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
      console.log(
        `HashMap | index: ${i} | bucket: ${JSON.stringify(this.storage[i])}`,
      );
    }
  }
}
