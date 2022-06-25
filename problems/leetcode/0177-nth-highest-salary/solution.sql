-- Solution 1
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      SELECT max(e1.Salary)
      FROM employee e1
      WHERE (
          SELECT COUNT(*) 
          FROM (
              SELECT DISTINCT Salary FROM Employee
            ) e2 
          WHERE e2.Salary > e1.Salary
      ) = N - 1
  );
END

-- 
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      SELECT e1.Salary
      FROM (
          SELECT DISTINCT Salary FROM Employee
    ) e1
      WHERE (SELECT COUNT(*) FROM (SELECT DISTINCT Salary FROM Employee) e2 WHERE e2.Salary > e1.Salary) = N - 1      
      
      LIMIT 1
  );
END

-- Solution 3
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
DECLARE M INT;
SET M=N-1;
  RETURN (
      SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT M, 1
  );
END