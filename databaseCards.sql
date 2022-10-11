CREATE TABLE cards(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  text varchar(50) NOT NULL,
  src varchar(50) NOT NULL,
  alt varchar(50) NOT NULL,
  price integer
);

INSERT INTO cards
(name, text, src, alt, price)
VALUES

  ('Hias the Inventor', 'This is a summary about this character.', '/hias.png','edited photo of character', 70 ),
  ('Matjaz the Merchant', 'This is a summary about this character.', '/matjaz.png','edited photo of character', 50 ),
('Tiago the Wise', 'This is a summary about this character.', '/tiago.png', 'edited photo of character', 50 ),
('Timon the Dragonbender', 'This is a summary about this character.', '/timon.png', 'edited photo of character', 50),
('Ute the Warrior', 'This is a summary about this character.', '/ute.png', 'edited photo of character', 50),
 ('Lisa Legola', 'This is a summary about this character.', '/lisa.png', 'edited photo of character', 50),
  ('Michael the Pirate', 'This is a summary about this character.', '/michael.png', 'edited photo of character', 50),
('Julimon', 'This is a summary about this character.', '/julia.png','edited photo of character', 50),
  ('Karl and Kaaaarl', 'This is a summary about this character.', '/karl.png', 'edited photo of character', 100),
 ('Agatha the Seer', 'This is a summary about this character.', '/agatha.png', 'edited photo of character', 50),
  ('Super Eugene', 'This is a summary about this character.', '/eugene.png', 'edited photo of character', 50),
('Michi Kid', 'This is a summary about this character.', '/michi.png', 'edited photo of character', 50),
 ('Regina Rhea', 'This is a summary about this character.', '/rhea.png', 'edited photo of character', 50),
('Will-Man', 'This is a summary about this character.', '/will.png', 'edited photo of character', 50),
('Grand Master Jose', 'This is a summary about this character.', '/jose.png','edited photo of character', 100);


SELECT * FROM cards;
