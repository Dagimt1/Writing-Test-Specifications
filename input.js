function multiplication(a, b) {
  return a * b;
}

function concatOdds(a, b) {
    let concatenatedArray = a.concat(b);
    let noDuplicates = [];

    let oddNumbers = concatenatedArray.filter(item => item % 2 !== 0).sort((x, y) => x - y);
    
    
    oddNumbers.forEach(item => {
        if (!noDuplicates.includes(item)) {
            noDuplicates.push(item);
        }
    });

    
    return noDuplicates;
}


class Checkout {
    constructor(user = null, cart = []) {
        this.user = user; // null for guests
        this.cart = cart; // Array of items in the cart
    }

    isEmptyCart() {
        return this.cart.length === 0;
    }

    getCartSummary() {
        if (this.isEmptyCart()) {
            return "Your cart is empty.";
        }
        
        let summary = "Cart Summary:\n";
        this.cart.forEach(item => summary += `${item.name}: $${item.price}\n`);
        return summary.trim();
    }

    checkout() {
        if (this.isEmptyCart()) {
            return "Cannot proceed with checkout, cart is empty.";
        }

        let message = this.getCartSummary();
        
        if (this.user) {
            message += "\nProceeding to checkout as a logged-in user.";
        } else {
            message += "\nWould you like to create an account for faster checkout next time?";
        }

        return message + "\nThank you for your purchase!";
    }
}

module.exports = { multiplication, concatOdds, Checkout };
