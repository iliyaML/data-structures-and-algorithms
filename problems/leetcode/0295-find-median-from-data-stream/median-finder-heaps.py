import heapq


class MedianFinder:

    def __init__(self):
        # max heap
        self.small = []

        # min heap
        self.large = []

    def addNum(self, num: int) -> None:
        """
        Time Complexity: O(log n)
        """
        # by default, add to our max heap
        heapq.heappush(self.small, -1 * num)

        # ensure the order is always correct
        # everything in the small heap must be smaller
        # than everything in the large heap
        if (self.small and self.large and -1 * (self.small[0]) > self.large[0]):
            val = -1 * heapq.heappop(self.small)
            heapq.heappush(self.large, val)

        # if one heap is greater by more than 1
        if len(self.small) > len(self.large) + 1:
            val = -1 * heapq.heappop(self.small)
            heapq.heappush(self.large, val)

        if len(self.large) > len(self.small) + 1:
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -1 * val)

    def findMedian(self) -> float:
        """
        Time Complexity: O(1)
        """
        if len(self.small) > len(self.large):
            return -1 * self.small[0]

        if len(self.large) > len(self.small):
            return self.large[0]

        # if length is even, return the average of the two in the middle
        return ((-1 * self.small[0]) + self.large[0]) / 2


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
