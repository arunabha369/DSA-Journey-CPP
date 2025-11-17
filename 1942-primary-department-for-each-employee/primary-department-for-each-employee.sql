SELECT employee_id, department_id
FROM Employee
WHERE primary_flag='Y' OR
    employee_id in
    (SELECT Employee_id
    FROM Employee as A
    GROUP BY employee_id
    having count(employee_id)=1);