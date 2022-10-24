const cardSets = [
  {
    id: 1,
    name: 'Hias the Inventor',
    text: 'This is a summary about this character.',
    src: '/hias.png',
    alt: 'edited photo of character',
    price: 70,
  },
  {
    id: 2,
    name: 'Matjaz the Merchant',
    text: 'This is a summary about this character.',
    src: '/matjaz.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 3,
    name: 'Tiago the Wise',
    text: 'This is a summary about this character.',
    src: '/tiago.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 4,
    name: 'Timon the Dragonbender',
    text: 'This is a summary about this character.',
    src: '/timon.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 5,
    name: 'Ute the Warrior',
    text: 'This is a summary about this character.',
    src: '/ute.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 6,
    name: 'Lisa Legola',
    text: 'This is a summary about this character.',
    src: '/lisa.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 7,
    name: 'Michael the Pirate',
    text: 'This is a summary about this character.',
    src: '/michael.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 8,
    name: 'Julimon',
    text: 'This is a summary about this character.',
    src: '/julia.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 9,
    name: 'Karl and Kaaaarl',
    text: 'This is a summary about this character.',
    src: '/karl.png',
    alt: 'edited photo of character',
    price: 100,
  },
  {
    id: 10,
    name: 'Agatha the Seer',
    text: 'This is a summary about this character.',
    src: '/agatha.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 11,
    name: 'Super Eugene',
    text: 'This is a summary about this character.',
    src: '/eugene.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 12,
    name: 'Michi Kid',
    text: 'This is a summary about this character.',
    src: '/michi.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 13,
    name: 'Regina Rhea',
    text: 'This is a summary about this character.',
    src: '/rhea.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 14,
    name: 'Will-Man',
    text: 'This is a summary about this character.',
    src: '/will.png',
    alt: 'edited photo of character',
    price: 50,
  },
  {
    id: 15,
    name: 'Grand Master Jose',
    text: 'This is a summary about this character.',
    src: '/jose.png',
    alt: 'edited photo of character',
    price: 100,
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO cards ${sql(cardSets, 'name', 'text', 'src', 'alt', 'price')}

  `;
};

exports.down = async (sql) => {
  for (const card of cardSets) {
    await sql`
      DELETE FROM
        cardSets
      WHERE
        name = ${card.name} AND
        text = ${card.text} AND
        src = ${card.src} AND
        alt = ${card.alt} AND
        price = ${card.price}
      `;
  }
};
