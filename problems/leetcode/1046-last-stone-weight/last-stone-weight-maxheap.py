class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # store the negative values in an array
        # this is so that it can simulate a maxheap in python
        stones = [-s for s in stones]

        # Time Complexity: O(n)
        # build a maxheap
        heapq.heapify(stones)

        # continue to operate this until we have at least 1 or 0 stones
        # Time Complexity: O(n log n)
        # loop n times, get the max element in O(log n)
        while len(stones) > 1:
            # get the largest and second largest stones
            first = abs(heapq.heappop(stones))
            second = abs(heapq.heappop(stones))

            if second < first:
                heapq.heappush(stones, -1*(first - second))

        # at this point, we could have zero stones or just one
        return 0 if len(stones) == 0 else abs(stones[0])
