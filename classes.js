const itemKeys = ['name', 'price', 'type'];
const customerKeys = ['firstname', 'lastname', 'username', 'email', 'birthdate', 'membership'];
const membershipKeys = ['Platinum', 'Gold', 'Silver'];

class Item {
    constructor(data) {
        this.name = data.name;
        this.price = data.price;
    }
};

class Product extends Item {};
class Service extends Item {};

class Discount {
    constructor(data) {
        this.service = data.service;
        this.product = data.product;
    }
};

/**
 * Represents a Customer's Visit to the Gym
 */
class Visit {
    /**
     * 
     * @param {Customer} customer 
     */
    constructor(customer) {
        this.customer = customer;
        this.services = [];
        this.products = [];
    }
    
    /**
     * Adds a service to the visit
     * @param {Service} service
     * @returns The visit
     */
    addService(service) {
        this.services.push(service);
        return this;
    }

    /**
     * Adds a product to the visit
     * @param {Product} product
     * @returns The visit
     */
    addProduct(product) {
        this.products.push(product);
        return this;
    }

    /**
     * Calculates the total price of services in the visit
     * @returns {numbers} Total price of services in the visit
     */
    getServiceTotal() {
        var price = 0;
        for (var service of this.services)
            price += service.price;
        return price;
    }

    /**
     * Calculates the total price of products in the visit
     * @returns {numbers} Total price of products in the visit
     */
    getProductTotal() {
        var price = 0;
        for (var product of this.products)
            price += product.price;
        return price;
    }

    /**
     * Calculates the total payment for this visit
     * @returns {number} Total payment
     */
    getTotalPayment() {
        return this.getProductTotal() + this.getServiceTotal();
    }

    /**
     * Calculates the total payment for this visit after taking the members' discount in consideration.
     * @returns {number} Total payment after discount
     */
    getDiscountedTotalPayment() {
        return (
            this.getServiceTotal() * (1 - this.customer.discount.service) +
            this.getProductTotal() * (1 - this.customer.discount.product)
        );
    }
};

class Customer {
    constructor(data, discounts) {
        for (var key of customerKeys) {
            this[key] = data[key];
        }

        this.setDiscount(discounts);
    }

    setDiscount(discounts) {
        this.discount = discounts[this.membership];
    }
};

module.exports = {
    Product: Product,
    Service: Service,
    Discount: Discount,
    Visit: Visit,
    Customer: Customer
};
