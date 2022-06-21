-- Solution 1
SELECT patient_id, patient_name, conditions
FROM Patients
WHERE conditions LIKE '% DIAB1%' OR conditions LIKE 'DIAB1%';

-- Solution 2
SELECT * FROM patients WHERE conditions REGEXP '\\bDIAB1';