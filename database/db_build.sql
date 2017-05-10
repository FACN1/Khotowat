BEGIN;

DROP TABLE IF EXISTS questions, answers CASCADE;

CREATE TABLE questions (
  id       SERIAL     PRIMARY KEY,
  question VARCHAR(255)
);

CREATE TABLE answers (
  id          SERIAL      PRIMARY KEY,
  answer1 NVARCHAR (255) COLLATE Arabic_CI_AI_KS_WS NOT NULL,
  answer2 NVARCHAR (255) COLLATE Arabic_CI_AI_KS_WS NOT NULL,
  answer3 NVARCHAR (255) COLLATE Arabic_CI_AI_KS_WS NOT NULL,
  answer4 NVARCHAR (255) COLLATE Arabic_CI_AI_KS_WS NOT NULL
);

INSERT INTO questions (question) VALUES
  ('السؤال الاول؟؟' ),
  ('السؤال الثاني ؟؟ '),
  (' السؤال الثالث ؟؟'),
  ( 'السؤال الرابع ؟؟ ');

INSERT INTO answers ( answer1, answer2, answer3, answer4) VALUES
  ( 'الجواب الاول', ' الجواب الثاني ', ' الجواب الثالث ', ' الجواب الرابع '),
  ( 'الجواب الاول', ' الجواب الثاني ', ' الجواب الثالث ', ' الجواب الرابع '),
  ( 'الجواب الاول', ' الجواب الثاني ', ' الجواب الثالث ', ' الجواب الرابع '),
  ( 'الجواب الاول', ' الجواب الثاني ', ' الجواب الثالث ', ' الجواب الرابع ');

COMMIT;
