exports.up = async (sql) => {
  await sql`CREATE TABLE cards(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(50) NOT NULL,
    text varchar(50) NOT NULL,
    src varchar(50) NOT NULL,
    alt varchar(50) NOT NULL,
    price integer NOT NULL
  )`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE cards`;
};
