-- Solution 1
SELECT Customers.name AS Customers
FROM Customers
WHERE Customers.id NOT IN (
    SELECT DISTINCT(Orders.customerId)
    FROM Orders
);

-- Solution 2
SELECT Customers.name AS Customers
FROM Customers
WHERE NOT EXISTS (
    SELECT *
    FROM Orders
    WHERE Customers.id = Orders.customerId
);

-- Solution 3
SELECT Customers.name AS Customers
FROM Customers
LEFT JOIN Orders
ON Customers.id = Orders.customerId 
WHERE Orders.customerId IS NULL;