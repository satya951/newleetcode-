# Write your MySQL query statement below
# Write your MySQL query statement below
SELECT 
    d.Name AS Department,
    e.Name AS Employee,
    e.Salary
FROM 
    Employee e
JOIN 
    Department d
ON 
    e.DepartmentId = d.Id
WHERE 
    e.Salary = (
        SELECT MAX(e2.Salary)
        FROM Employee e2
        WHERE e2.DepartmentId = e.DepartmentId
    );