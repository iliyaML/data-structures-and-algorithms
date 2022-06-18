-- Solution 1
SELECT E1.name AS Employee 
FROM Employee E1, Employee E2
WHERE E1.managerId = E2.id AND E1.salary > E2.salary;

-- Solution 2
SELECT E1.name AS Employee
FROM Employee E1
WHERE E1.salary > (
    SELECT E2.salary
    FROM Employee E2
    WHERE E2.id = E1.managerId
);