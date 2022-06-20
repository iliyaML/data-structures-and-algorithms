-- Solution: Use AND as opposed to WHERE
-- References: https://stackoverflow.com/questions/16400603/usage-of-and-vs-where-clause-in-sql
SELECT 
    Users.user_id AS buyer_id, 
    Users.join_date AS join_date,
    IFNULL(COUNT(order_id), 0) AS orders_in_2019
FROM Users
LEFT JOIN Orders
ON Users.user_id = Orders.buyer_id 
AND YEAR(Orders.order_date) = 2019
GROUP BY Users.user_id;
