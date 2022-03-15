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
   * Time Complexity: O(n log n), due to sorting
   * Space Complexity: O(n)
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals) {
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

    // go through each item in the start and end arrays
    // both are of the same length
    for (let i = 0, l = starts.length - 1; i < l; ++i) {
      // if the meeting at (i + 1) starts before the meeting at (i) ends
      if (starts[i + 1] < ends[i]) {
        // then we can't attend the meeting
        return false;
      }
    }

    // otherwise, we can attend all the meetings
    return true;
  }
}
