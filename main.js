const C = require('./classes');
const items = require('./items');

var customer = new C.Customer({
    firstname: 'Mamdouh',
    lastname: 'Waleed',
    username: 'XtratoS',
    email: 'ultimate.nuker@yahoo.com',
    birthdate: new Date(year=1996, month=3, day=9),
    membership: 'Gold'
}, items.discounts);

var visit = new C.Visit(customer);

items.services.map(service => visit.addService(service));
items.products.map(product => visit.addProduct(product));

console.log(`Price Before Discount: ${visit.getTotalPayment()}`);
console.log(`Price After Discount: ${visit.getDiscountedTotalPayment()}`);