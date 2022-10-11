import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

export async function getCards() {
  const cards = await sql`
SELECT * FROM cards;

`;

  return cards;
}

export function tryConnect() {
  console.log('connect');
}
