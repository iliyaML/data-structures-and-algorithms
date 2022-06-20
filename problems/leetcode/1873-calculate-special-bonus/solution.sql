-- Solution 1
SELECT 
    employee_id, 
    IF(employee_id %2 = 1 AND name NOT LIKE 'M%', salary, 0) AS bonus
FROM Employees
ORDER BY employee_id ASC;

-- Solution 2
SELECT employee_id,
salary * (employee_id%2) * (name NOT LIKE "M%") AS bonus
FROM Employees
ORDER BY employee_id ASC;