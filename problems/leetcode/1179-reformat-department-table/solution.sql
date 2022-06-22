-- Solution 1
SELECT id, 
    SUM(IF(`month` = 'Jan', revenue, NULL)) AS Jan_Revenue,
	SUM(IF(`month` = 'Feb', revenue, NULL)) AS Feb_Revenue,
	SUM(IF(`month` = 'Mar', revenue, NULL)) AS Mar_Revenue,
	SUM(IF(`month` = 'Apr', revenue, NULL)) AS Apr_Revenue,
	SUM(IF(`month` = 'May', revenue, NULL)) AS May_Revenue,
	SUM(IF(`month` = 'Jun', revenue, NULL)) AS Jun_Revenue,
	SUM(IF(`month` = 'Jul', revenue, NULL)) AS Jul_Revenue,
	SUM(IF(`month` = 'Aug', revenue, NULL)) AS Aug_Revenue,
	SUM(IF(`month` = 'Sep', revenue, NULL)) AS Sep_Revenue,
	SUM(IF(`month` = 'Oct', revenue, NULL)) AS Oct_Revenue,
	SUM(IF(`month` = 'Nov', revenue, NULL)) AS Nov_Revenue,
	SUM(IF(`month` = 'Dec', revenue, NULL)) AS Dec_Revenue
FROM department
GROUP BY id
ORDER BY id ASC;

-- Solution 2
SELECT id, 
	SUM(CASE WHEN `month` = 'Jan' then revenue ELSE NULL END) AS Jan_Revenue,
	SUM(CASE WHEN `month` = 'Feb' then revenue ELSE NULL END) AS Feb_Revenue,
	SUM(CASE WHEN `month` = 'Mar' then revenue ELSE NULL END) AS Mar_Revenue,
	SUM(CASE WHEN `month` = 'Apr' then revenue ELSE NULL END) AS Apr_Revenue,
	SUM(CASE WHEN `month` = 'May' then revenue ELSE NULL END) AS May_Revenue,
	SUM(CASE WHEN `month` = 'Jun' then revenue ELSE NULL END) AS Jun_Revenue,
	SUM(CASE WHEN `month` = 'Jul' then revenue ELSE NULL END) AS Jul_Revenue,
	SUM(CASE WHEN `month` = 'Aug' then revenue ELSE NULL END) AS Aug_Revenue,
	SUM(CASE WHEN `month` = 'Sep' then revenue ELSE NULL END) AS Sep_Revenue,
	SUM(CASE WHEN `month` = 'Oct' then revenue ELSE NULL END) AS Oct_Revenue,
	SUM(CASE WHEN `month` = 'Nov' then revenue ELSE NULL END) AS Nov_Revenue,
	SUM(CASE WHEN `month` = 'Dec' then revenue ELSE NULL END) AS Dec_Revenue
FROM department
GROUP BY id
ORDER BY id ASC;