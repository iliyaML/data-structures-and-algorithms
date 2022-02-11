/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  // they can't be isomorphic if their lengths aren't the same
  if (s.length !== t.length) {
    return false;
  }

  // at this point, s and l are of the same length
  const stoT = new Map();
  const ttoS = new Map();

  for (let i = 0, l = s.length; i < l; ++i) {
    const charS = s.charAt(i);
    const charT = t.charAt(i);

    if (stoT.has(charS) && stoT.get(charS) !== charT) {
      return false;
    }
    if (ttoS.has(charT) && ttoS.get(charT) !== charS) {
      return false;
    }

    // set the characters in our maps
    stoT.set(charS, charT);
    ttoS.set(charT, charS);
  }

  // if we reach this point, then they are isomorphic
  return true;
};
