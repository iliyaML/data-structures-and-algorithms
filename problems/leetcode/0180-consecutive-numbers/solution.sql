-- Solution 1
SELECT DISTINCT num AS ConsecutiveNums
FROM `Logs`
WHERE 
        (id + 1, num) IN (SELECT * FROM `Logs`)
    AND
        (id + 2, num) IN (SELECT * FROM `Logs`);

-- Solution 2
SELECT DISTINCT L1.num AS ConsecutiveNums
FROM `Logs` L1, `Logs` L2, `Logs` L3
WHERE 
        L1.id = L2.id - 1 AND L2.id = L3.id - 1
    AND
        L1.num = L2.num AND L2.num = L3.num;