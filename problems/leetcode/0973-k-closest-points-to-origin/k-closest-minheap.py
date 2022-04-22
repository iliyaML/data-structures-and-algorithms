class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minHeap = []
        for x, y in points:
            # compute the distance from the origin
            distance = (x ** 2) + (y ** 2)
            minHeap.append([distance, x, y])

        # Time Complexity: O(n)
        # convert our array to a minheap
        heapq.heapify(minHeap)

        results = []
        # loop k times
        while k > 0:
            # get point with the smallest distance
            distance, x, y = heapq.heappop(minHeap)

            # add it to our results arrray
            results.append([x, y])
            k -= 1

        return results
