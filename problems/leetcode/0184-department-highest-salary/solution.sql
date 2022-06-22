-- Solution 1
SELECT 
    Department.name AS Department, 
    Employee.name AS Employee, 
    Employee.salary AS Salary
FROM Employee, Department
WHERE Employee.departmentId = Department.id
AND Employee.salary = (
    SELECT MAX(E2.Salary)
    FROM Employee E2
    WHERE E2.departmentId = Department.id
);

-- Solution 2
SELECT 
    D.name AS Department, 
    E.name AS Employee, 
    E.salary AS Salary
FROM 
    Employee E, 
    Department D,
    (SELECT Employee.departmentId, MAX(salary) AS max FROM Employee GROUP BY Employee.departmentId) S
WHERE 
    E.departmentId = D.id AND
    E.salary = S.max AND 
    E.departmentId = S.departmentId;