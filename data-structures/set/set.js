// caveats: don't store objects

const mySet = new Set();

// get size of set
mySet.size;

// add item to the set
mySet.add(321);

// check if item exists in the set
mySet.has(999);

// remove item from the set
mySet.delete(123);

// remove all items in the set
mySet.clear();

// return keys as a list
[...mySet.keys()];

// return values as a list
[...mySet.values()];

// loop through items in the set
for (let item of mySet) {
  console.log(item);
}
