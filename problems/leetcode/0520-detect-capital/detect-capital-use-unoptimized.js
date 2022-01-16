/**
 * Unoptimized
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  let text = "AZ";

  let firstCapital = text.charCodeAt(0);
  let lastCapital = text.charCodeAt(1);

  let firstCapitalCaps = false;
  let secondCapitalCaps = false;

  for (let i = 0, l = word.length; i < l; ++i) {
    if (i === 0) {
      if (
        word.charCodeAt(i) >= firstCapital &&
        word.charCodeAt(i) <= lastCapital
      ) {
        firstCapitalCaps = true;
      }
    } else {
      if (firstCapitalCaps) {
        if (i === 1) {
          if (
            word.charCodeAt(i) >= firstCapital &&
            word.charCodeAt(i) <= lastCapital
          ) {
            secondCapitalCaps = true;
          }
        } else {
          if (secondCapitalCaps) {
            if (
              word.charCodeAt(i) < firstCapital ||
              word.charCodeAt(i) > lastCapital
            ) {
              return false;
            }
          } else {
            if (
              word.charCodeAt(i) >= firstCapital &&
              word.charCodeAt(i) <= lastCapital
            ) {
              return false;
            }
          }
        }
      } else {
        if (
          word.charCodeAt(i) >= firstCapital &&
          word.charCodeAt(i) <= lastCapital
        ) {
          return false;
        }
      }
    }
  }

  return true;
};
