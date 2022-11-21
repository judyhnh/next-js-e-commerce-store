import { totalSumOfCards } from '../cartFunctions';

test('calculate total sum of cards', () => {
  const currentCart = [
    { id: 1, cart: 2, price: 70 },
    { id: 15, cart: 1, price: 100 },
  ];
  expect(totalSumOfCards(currentCart)).toBe(240);
});
