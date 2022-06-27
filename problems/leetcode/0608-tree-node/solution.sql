-- Solution 1
SELECT 
    id,
    CASE
        WHEN p_id IS NULL THEN "Root"
        WHEN (p_id IS NOT NULL AND id IN (SELECT p_id FROM Tree)) THEN "Inner"
        ELSE "Leaf"
    END AS `type`
FROM Tree;

-- Solution 2
SELECT 
    id, 
    IF(ISNULL(p_id), 'Root', IF(id IN (SELECT p_id FROM tree), 'Inner', 'Leaf')) `type` 
FROM Tree;
