import Cookies from 'js-cookie';
import { getParsedCookie } from './cookies';

// to remove item from cart page
export function removeCardFromCart(id) {
  // 1. get cookies from current cart
  const currentCart = Cookies.get('cart') ? getParsedCookie('cart') : [];
  // 2. make sure the id matches with the id of current cart
  const cardsInCart = currentCart.find((card) => card.id === id);
  // 3. if the value in the cart is bigger than 1
  if (cardsInCart?.cart > 1) {
    cardsInCart.cart -= 1;
  } else {
    const removeIndex = currentCart
      .map(function (card) {
        return card.id;
      })
      // locate where the id is (index) and
      .indexOf(id);
    // remove item with that index from current cart
    currentCart.splice(removeIndex, 1);
  }
  return currentCart;
}

export function addCardToCart(id) {
  const currentCart = Cookies.get('cart') ? getParsedCookie('cart') : [];
  const cardsInCart = currentCart.find((card) => card.id === id);
  if (cardsInCart) {
    cardsInCart.cart += 1;
  } else {
    currentCart.push({ id: id, cart: 1 });
  }
  return currentCart;
}

export function totalAmountOfCards(currentCart) {
  return currentCart
    .map((product) => product.cart)
    .reduce((totalAmount, currentAmount) => totalAmount + currentAmount, 0);
}

export function totalSumOfCards(currentCart) {
  return currentCart.reduce((accumulator, product) => {
    return accumulator + product.price * product.cart;
  }, 0);
}
