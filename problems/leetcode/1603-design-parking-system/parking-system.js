class ParkingSystem {
  /**
   * @param {number} big
   * @param {number} medium
   * @param {number} small
   */
  constructor(big, medium, small) {
    // store the values of each car type in an array
    this.count = [big, medium, small];
  }

  /**
   * @param {number} carType
   * @return {boolean}
   */
  addCar(carType) {
    return this.count[carType - 1]-- > 0;
  }
}
