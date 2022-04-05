/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  // initialize our two pointers
  let left = 0;
  let right = s.length - 1;

  // two pointer approach
  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      // use our helper function
      // to evaluate skipping the left character and skipe the right character
      // two cases here
      return (
        _validPalindrome(s, left + 1, right) ||
        _validPalindrome(s, left, right - 1)
      );
    }
    // move the pointers if the characters at left and right are equal to each other
    left++;
    right--;
  }

  return true;
};

const _validPalindrome = (s, left, right) => {
  console.log(s);
  // two pointer approach
  while (left < right) {
    // check the characters at the left and right position
    // if they are not the same, immediate return false (not a palindrome)
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    // move the pointers
    left++;
    right--;
  }

  return true;
};
