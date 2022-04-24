class KthLargest:
    # Time Complexity: O(n log n)
    def __init__(self, k: int, nums: List[int]):
        self.minHeap = nums
        self.k = k

        # Time Complexity: O(n)
        # transform the list into a heap
        heapq.heapify(self.minHeap)

        # remove the elements until we have only k elements
        # kth largest element would be the smallest number in the heap
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)

    # Time Complexity: O(log n)
    def add(self, val: int) -> int:
        # add the new value to the heap
        heapq.heappush(self.minHeap, val)

        # if the length of the heap is greater than k
        # we pop from the heap
        if len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)

        # return the smallest number in the heap
        # which represents the kth largest element
        return self.minHeap[0]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
