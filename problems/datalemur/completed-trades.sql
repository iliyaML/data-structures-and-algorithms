SELECT users.city, COUNT(*) AS total_orders
FROM 
  (SELECT * FROM trades WHERE status = 'Completed') trades,
  users
WHERE trades.user_id = users.user_id
GROUP BY users.city
ORDER BY total_orders DESC
LIMIT 3;