CREATE TABLE students(
    id integer,
    first_name varchar(50),
    last_name varchar(50),
    age integer,
    location varchar(50)
)

INSERT INTO students
VALUES (1, "Juan", "Dela Cruz", 30, "Manila"),
       (2, "Dos", "Dela Cruz", 31, "Manila"),
       (3, "Tres", "Dela Cruz", 32, "Manila"),
       (4, "Quatro", "Dela Cruz", 33, "Manila"),
       (5, "Singko", "Dela Cruz", 34, "Manila")


UPDATE students
SET location = "Cavite"
WHERE id = 1

DELETE FROM students WHERE id = 5

SELECT COUNT (*)
FROM students

SELECT *
FROM students
WHERE location = "Manila"

SELECT AVG(age)
FROM students

SELECT *
FROM students
ORDER BY age DESC;
