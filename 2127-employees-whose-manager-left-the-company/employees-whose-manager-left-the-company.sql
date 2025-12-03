SELECT e.employee_id 
FROM Employees e
WHERE e.salary<30000 
    AND e.manager_id NOT IN (SELECT subquery.employee_id
                             FROM Employees subquery 
                             )
ORDER BY e.employee_id