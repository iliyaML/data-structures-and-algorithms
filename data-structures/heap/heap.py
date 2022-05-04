import heapq

H = [35, 2, 50, 63, 5, 10]

# Convert the list to a heap (min heap)
# Time Complexity: O(n)
heapq.heapify(H)
print(H)

# Add element to the heap
# Time Complexity: O(log n)
heapq.heappush(H, 8)
print(H)

# Remove element from the heap
# Time Complexity: O(log n)
heapq.heappop(H)
print(H)

# Replace the smallest element with a new value
heapq.heapreplace(H, 6)
print(H)
