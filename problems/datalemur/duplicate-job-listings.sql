SELECT 
  COUNT(t.company_id) AS duplicate_companies
FROM 
(
  SELECT
    company_id, 
    COUNT(company_id) 
  FROM 
    job_listings
  GROUP BY 
    company_id, 
    title, 
    description
  HAVING 
    COUNT(company_id) > 1
) t;