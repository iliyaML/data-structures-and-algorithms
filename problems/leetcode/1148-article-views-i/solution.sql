-- Solution 1
SELECT DISTINCT author_id AS id FROM Views 
WHERE author_id = viewer_id 
ORDER BY id ASC;

-- Solution 2
SELECT author_id AS id FROM Views 
WHERE author_id = viewer_id 
GROUP BY author_id
ORDER BY id ASC;