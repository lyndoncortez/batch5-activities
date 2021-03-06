/*https://extendsclass.com/sqlite/9f807b4*/

CREATE TABLE students(
    id integer,
    first_name varchar(50),
    last_name varchar(50),
    age integer,
    location varchar(50)
)

INSERT INTO students
VALUES (1, "Juan", "Dela Cruz", 30, "Cavite"),
       (2, "Dos", "Dela Cruz", 31, "Manila"),
       (3, "Tres", "Dela Cruz", 32, "Isabela"),
       (4, "Quatro", "Dela Cruz", 33, "Zamboanga"),
       (5, "Singko", "Dela Cruz", 34, "Manila"),
       (6, "Sais", "Dela Cruz", 23, "Cavite"),
       (7, "Siyete", "Dela Cruz", 24, "Cebu"),
       (8, "Ocho", "Dela Cruz", 26, "Palawan"),
       (9, "Nuwebe", "Dela Cruz", 28, "Manila"),
       (10, "Diyes", "Dela Cruz", 33, "Baguio")


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

