/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = (students, sandwiches) => {
  // idx: type of sandwich
  // val: frequency
  let arr = new Array(2).fill(0);

  // go through all the students and populate our array
  for (let student of students) {
    ++arr[student];
  }

  // go through the sandwich from top of the stack
  for (let sandwich of sandwiches) {
    if (arr[sandwich] > 0) {
      // if we have a student who wants this sandwich
      // we decrease the frequency
      --arr[sandwich];
    } else {
      // otherwise, no student wants it
      // we immediate return the frequency of index 0 and 1
      return arr[0] + arr[1];
    }
  }

  // if we reach here, all the students have gotten their preferred sandwiches
  return 0;
};
