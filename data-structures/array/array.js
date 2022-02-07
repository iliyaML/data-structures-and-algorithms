const arr = [1, 2, 3, 4, 5];

// get size of array
arr.length;

// add item to the end of the array
arr.push(1);

// remove item at the end of the array and returns it
arr.pop();

// add item to the beginning of the array
arr.unshift(1);

// remove item at the beginning of the array and returns it
arr.shift();

// remove an item at a particular index
// first parameter: index
// second parameter: number of items to remove
arr.splice(0, 1);

// get item at a particular index
arr[10];

// get last item in the array
arr[arr.length - 1];

// returns a string version of the array
arr.toString();

// joins an array, equivalent to toString()
arr.join("");

// reverse the array
arr.reverse();

// create an array with a certain size and initial value
// may not be supported by all browsers (looking at you IE)
new Array(26).fill(0);

// sorting in ascending order
arr.sort(function (a, b) {
  return a - b;
});

// looping through items in an array
for (let i = 0, l = arr.length; i < l; ++i) {
  console.log(arr[i]);
}

// alternative, does not have the counter i
for (let item of arr) {
  console.log(item);
}
