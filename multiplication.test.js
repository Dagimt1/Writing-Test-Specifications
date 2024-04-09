const { multiplication, concatOdds, Checkout } = require('./input');



describe('Multiplication functionality', () => {
  test('multiplies 1 * 2 to equal 2', () => {
    expect(multiplication(1, 2)).toBe(2);
  });
});

describe('ConcatOdds functionality', () => {
  test('It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.', () => {
    expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([-1, 1, 3, 9, 15]);
  });
});

describe('Checkout process', () => {
  test('Cart is empty', () => {
    const checkout = new Checkout();
    expect(checkout.checkout()).toBe("Cannot proceed with checkout, cart is empty.");
  });

  test('Checkout as guest with items', () => {
    const cart = [{ name: "Book", price: 9.99 }];
    const checkout = new Checkout(null, cart);
    const expectedMessage = `Cart Summary:\nBook: $9.99\nWould you like to create an account for faster checkout next time?\nThank you for your purchase!`;
    expect(checkout.checkout()).toBe(expectedMessage);
  });

  test('Checkout as registered user with items', () => {
    const user = { name: "Dagim Jalleta", email: "dagimJalleta@gmail.com" };
    const cart = [{ name: "Book", price: 9.99 }];
    const checkout = new Checkout(user, cart);
    const expectedMessage = `Cart Summary:\nBook: $9.99\nProceeding to checkout as a logged-in user.\nThank you for your purchase!`;
    expect(checkout.checkout()).toBe(expectedMessage);
  });
});
