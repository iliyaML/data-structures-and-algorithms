class MedianFinder {
  constructor() {
    this.data = [];
  }

  /**
   * Time Complexity: O(1)
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    this.data.push(num);
  }

  /**
   * Time Complexity: O(n log n), due to sorting
   * @return {number}
   */
  findMedian() {
    // sort the data
    this.data.sort((a, b) => a - b);

    const len = this.data.length;

    // if we have total length that is even
    // return the average of the middle indices
    if (len % 2 === 0) {
      return (
        (this.data[Math.floor(len / 2)] + this.data[Math.floor(len / 2) - 1]) /
        2
      );
    }

    // if it's odd
    // return the middle index
    return this.data[Math.floor(len / 2)];
  }
}
