/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = (logs) => {
  let years = new Array(101).fill(0);

  for (let [birthyear, deathyear] of logs) {
    ++years[birthyear - 1950];
    --years[deathyear - 1950];
  }

  let maxPeople = -Infinity;
  let maxYear = 1950;
  let peopleAlive = 0;

  for (let i = 0, l = years.length; i < l; ++i) {
    peopleAlive += years[i];
    if (peopleAlive > maxPeople) {
      maxPeople = peopleAlive;
      maxYear = 1950 + i;
    }
  }

  return maxYear;
};
