SELECT DISTINCT pages.page_id
FROM
  pages
WHERE pages.page_id NOT IN 
(
  SELECT page_id FROM page_likes
)
ORDER BY pages.page_id ASC;