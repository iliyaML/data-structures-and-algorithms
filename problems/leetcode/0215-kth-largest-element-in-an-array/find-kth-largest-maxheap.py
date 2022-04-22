class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # store negative values of items in nums
        maxHeap = [-num for num in nums]

        # Time Complexity: O(n)
        # build a maxheap
        heapq.heapify(maxHeap)

        # Time Complexity: O(k log n)
        # loop k times, pop from the heap O(log n)
        result = 0
        while k > 0:
            result = heapq.heappop(maxHeap)
            k -= 1

        return -result
