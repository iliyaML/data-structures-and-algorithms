-- Solution 1
SELECT 
    P.product_id, 
    P.product_name
FROM Sales S
INNER JOIN Product P 
ON S.product_id = P.product_id
GROUP BY product_id
HAVING 
    MIN(sale_date) >= '2019-01-01' AND 
    MAX(sale_date) <= '2019-03-31';

-- Solution 2
SELECT 
    P.product_id,
    P.product_name 
FROM Product P
WHERE P.product_id IN
(
    SELECT S.product_id
    FROM Sales S
    GROUP BY S.product_id
    HAVING 
        MIN(S.sale_date) >= '2019-01-01' AND 
        MAX(S.sale_date) <= '2019-03-31'
);