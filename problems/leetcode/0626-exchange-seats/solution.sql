-- Solution 1
SELECT 
    IF(
        id < (SELECT COUNT(*) FROM seat), 
        IF(id MOD 2 = 0, id - 1, id + 1), 
        IF(id mod 2 = 0, id - 1, id)
    ) AS id, 
    student
FROM Seat
ORDER BY id ASC;

-- Solution 2
SELECT 
    CASE
        WHEN id % 2 = 0 THEN id - 1
        WHEN id % 2 = 1 AND ID < (SELECT COUNT(*) FROM Seat) THEN id + 1
        ELSE id
    END AS id, 
    student
FROM Seat
ORDER BY id ASC;