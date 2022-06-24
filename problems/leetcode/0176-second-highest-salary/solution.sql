-- Solution 1
SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);

-- Solution 2
SELECT MAX(e1.salary) AS SecondHighestSalary 
FROM Employee e1
WHERE (
    SELECT COUNT(*) 
    FROM (
        SELECT DISTINCT salary FROM Employee
    ) e2 
    WHERE e2.Salary > e1.Salary
) = 2 - 1;