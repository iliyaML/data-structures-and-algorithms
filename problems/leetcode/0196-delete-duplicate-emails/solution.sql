DELETE P2
FROM Person P1, Person P2
WHERE P1.email = P2.email AND P2.id > P1.id;