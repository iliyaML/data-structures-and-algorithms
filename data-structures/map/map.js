// caveats: don't use objects as keys, use strings instead

const myMap = new Map();

const initializeMapWithValues = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

// get size of map
myMap.size;

// add a key to the map
myMap.set("a", 1);

// get the value of a key
myMap.get("a");

// check if key exists
myMap.has("a");

// delete a key from the map
myMap.delete("a");

// remove all items
myMap.clear();

// return keys as a list
[...myMap.keys()];

// return values as a list
[...myMap.values()];

for (let [key, val] of myMap) {
  console.log(key, val);
}
