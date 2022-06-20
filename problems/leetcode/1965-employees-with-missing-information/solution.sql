-- Solution 1
SELECT employee_id
FROM Employees
LEFT JOIN Salaries
USING (employee_id)
WHERE salary IS NULL
UNION
SELECT employee_id
FROM Salaries
LEFT JOIN Employees
USING (employee_id)
WHERE name IS NULL
ORDER BY employee_id ASC;

-- Solution 2
SELECT employee_id 
FROM employees
WHERE employee_id NOT IN (SELECT employee_id FROM salaries)
UNION
SELECT employee_id 
FROM salaries
WHERE employee_id NOT IN (SELECT employee_id FROM employees)
ORDER BY employee_id ASC;