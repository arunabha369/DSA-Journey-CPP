-- Write your PostgreSQL query statement below
SELECT MAX(salary) as SecondHighestSalary
FROM Employee
WHERE salary != (select MAX(salary) from employee);
