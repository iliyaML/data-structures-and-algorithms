-- Solution 1
SELECT S.name
FROM Orders O
INNER JOIN Company C
ON O.com_id = C.com_id AND C.name = 'RED'
RIGHT JOIN SalesPerson S ON S.sales_id = O.sales_id
WHERE O.sales_id IS NULL

-- Solution 2
SELECT name
FROM SalesPerson
WHERE name NOT IN
(
    SELECT S.name
    FROM SalesPerson S, Orders O, Company C
    WHERE S.sales_id = O.sales_id AND O.com_id = C.com_id AND C.name = "RED"
)