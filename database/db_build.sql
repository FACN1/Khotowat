BEGIN;

DROP TABLE IF EXISTS questions, answers CASCADE;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question VARCHAR (255)
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  question_id INTEGER REFERENCES questions(id),
  answer1 VARCHAR (255) NOT NULL,
  answer2 VARCHAR (255) NOT NULL,
  answer3 VARCHAR (255) NOT NULL,
  answer4 VARCHAR (255) NOT NULL
);

INSERT INTO questions (question) VALUES
  (' السؤال الاول ',' السؤال الثاني ',' السؤال الثالث ',' السؤال الرابع ');

INSERT INTO answers (question_id, answer1, answer2, answer3, answer4) VALUES
  (1, 'الجواب الاول', ' الجواب الثاني ', ' الجواب الثالث ', ' الجواب الرابع '),
  (2, 'الجواب الاول', ' الجواب الثاني ', ' الجواب الثالث ', ' الجواب الرابع '),
  (3, 'الجواب الاول', ' الجواب الثاني ', ' الجواب الثالث ', ' الجواب الرابع '),
  (4, 'الجواب الاول', ' الجواب الثاني ', ' الجواب الثالث ', ' الجواب الرابع ');

COMMIT;
