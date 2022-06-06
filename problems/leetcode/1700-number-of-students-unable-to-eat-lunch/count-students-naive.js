/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = (students, sandwiches) => {
  while (checkLoop(students, sandwiches));

  return students.length;
};

const checkLoop = (students, sandwiches) => {
  let l = students.length;

  // go through each student in the queue to check if they want the
  // sandwich at the top of the stack
  while (l--) {
    // get the sandwich at the top of the stack
    // and student at the front of the queue
    let sandwich = sandwiches[0];
    let student = students.shift();

    if (sandwich === student) {
      // if student wants the sandwich
      // we remove the sandwich from the stack
      // and immediately return
      sandwiches.shift();
      return true;
    } else {
      // otherwise, we move the student to the end of the queue
      students.push(student);
    }
  }

  // no students want the sandwich at the top of the stack
  return false;
};
