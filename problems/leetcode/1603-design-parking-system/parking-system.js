class ParkingSystem {
  /**
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   * @param {number} big
   * @param {number} medium
   * @param {number} small
   */
  constructor(big, medium, small) {
    // store the values of each car type in an array
    // idx: car type
    // val: frequency
    this.count = [big, medium, small];
  }

  /**
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   * @param {number} carType
   * @return {boolean}
   */
  addCar(carType) {
    // check if the frequency for that cartype is more than 0
    return this.count[carType - 1]-- > 0;
  }
}
