SELECT t1.laptop_views, t2.mobile_views
FROM
  (SELECT 
    COUNT(laptop.user_id) AS laptop_views
  FROM 
    (SELECT user_id FROM viewership WHERE device_type = 'laptop') laptop) AS t1,
  (SELECT 
    COUNT(mobile.user_id) AS mobile_views
  FROM 
    (SELECT user_id FROM viewership WHERE device_type = 'tablet' OR device_type = 'phone') mobile) AS t2;