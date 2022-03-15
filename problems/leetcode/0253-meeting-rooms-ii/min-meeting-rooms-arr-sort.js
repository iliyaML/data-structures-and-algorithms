import { Interval } from "/opt/node/lib/lintcode/index.js";

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * Time Complexity: O(n log n)
   * Space Complexity: O(n)
   * @param intervals: an array of meeting time intervals
   * @return: the minimum number of conference rooms required
   */
  minMeetingRooms(intervals) {
    // basic check to ensure intervals array is valid and non-empty
    if (intervals === null || intervals.length === 0) {
      return 0;
    }

    // arrays to store our meeting start and end times
    let starts = [];
    let ends = [];

    // go through the intervals array and populate our own arrays
    for (let i = 0, l = intervals.length; i < l; ++i) {
      starts[i] = intervals[i].start;
      ends[i] = intervals[i].end;
    }

    // sort both start and end arrays
    starts.sort(function (a, b) {
      return a - b;
    });
    ends.sort(function (a, b) {
      return a - b;
    });

    let roomCount = 0;
    let maxRoomCount = 0;

    // use two pointers, one for each arrays
    let start = 0;
    let end = 0;

    while (start < starts.length) {
      // if the start time is less than ends
      if (starts[start] < ends[end]) {
        // we increase our current room count
        ++roomCount;
        // update our max room count
        maxRoomCount = Math.max(maxRoomCount, roomCount);
        // move our start pointer
        ++start;
      } else {
        // if end time is equal or less than start time
        // we decrement room count
        --roomCount;
        // and update our end pointer
        ++end;
      }
    }

    return maxRoomCount;
  }
}
