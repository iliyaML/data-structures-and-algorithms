// notes: keys are always converted to strings

const map = {
  key1: "val1",
  key2: "val2",
  key3: "val3",
};

console.log(map);

for (let key in map) {
  console.log(key, map[key]);
}

map["key4"] = "val4";

console.log(map["key4"]);
