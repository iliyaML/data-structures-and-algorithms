SELECT DISTINCT t.candidate_id 
FROM candidates t
WHERE t.candidate_id IN (
  SELECT t1.candidate_id FROM candidates t1 WHERE t.candidate_id = t1.candidate_id AND t1.skill = 'Python'
  INTERSECT
  SELECT t2.candidate_id FROM candidates t2 WHERE t.candidate_id = t2.candidate_id AND t2.skill = 'Tableau'
  INTERSECT
  SELECT t3.candidate_id FROM candidates t3 WHERE t.candidate_id = t3.candidate_id AND t3.skill = 'PostgreSQL'
)
ORDER BY t.candidate_id;