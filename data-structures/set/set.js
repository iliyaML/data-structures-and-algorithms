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

// find difference between two sets
let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);

// items = items in set A that are not present in set B
let items = [...setA].filter((item) => !setB.has(item));
console.log(items);
