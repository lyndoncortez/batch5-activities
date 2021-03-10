CREATE TABLE classroom (
  id integer,
  student_id integer,
  section varchar(10)
)

INSERT INTO classroom
VALUES
	(1, 1, "A"),
    (2, 2, "A"),
    (3, 3, "B"),
    (4, 4, "C"),
    (5, 5, "B"),
    (6, 6, "A"),
    (7, 7, "C"),
    (8, 8, "B"),
    (9, 9, "B"),
    (10, 10, "C")

SELECT * FROM classroom
INNER JOIN students ON classroom.id = students.id;

SELECT * FROM classroom
LEFT JOIN students ON classroom.id = students.id;

