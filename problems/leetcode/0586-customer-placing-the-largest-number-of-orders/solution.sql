-- Solution 1
SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC LIMIT 1;

-- Solution 2
SELECT customer_number
FROM Orders
GROUP BY customer_number
HAVING COUNT(order_number) = (
	SELECT COUNT(order_number) AS cnt
	FROM Orders
	GROUP BY customer_number
	ORDER BY cnt DESC
	LIMIT 1
);