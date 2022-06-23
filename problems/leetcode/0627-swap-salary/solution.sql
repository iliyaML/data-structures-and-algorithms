-- Solution 1
UPDATE Salary 
SET sex = IF(sex = 'f', 'm', 'f');

-- Solution 2
UPDATE salary 
SET sex = (CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END);