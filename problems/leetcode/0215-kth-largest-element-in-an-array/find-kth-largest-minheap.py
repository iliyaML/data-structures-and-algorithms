class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # Time Complexity: O(n)
        # build a minheap
        heapq.heapify(nums)

        # Time Complexity: O((n - k) log n)
        # loop n - k times, pop from the heap O(log n)
        # less efficient than max heap approach
        # if n is large and k is small
        while len(nums) > k:
            heapq.heappop(nums)

        return heapq.heappop(nums)
