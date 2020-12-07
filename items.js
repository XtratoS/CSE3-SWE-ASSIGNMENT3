C = require('./classes');

const discounts = {
    Silver: new C.Discount({product: 0.1, service: 0.15}),
    Gold: new C.Discount({product: 0.1, service: 0.2}),
    Platinum: new C.Discount({product: 0.1, service: 0.25})
};

const products = [
    new C.Product({
        name: 'Whey Protein',
        price: 100
    }),
    new C.Product({
        name: 'Amino Acids',
        price: 75
    }),
    new C.Product({
        name: 'Omega-3',
        price: 85
    }),
    new C.Product({
        name: 'Creatine',
        price: 35
    })
];

const services = [
    new C.Service({
        name: 'Personal Trainer',
        price: 150
    }),
    new C.Service({
        name: 'Spa',
        price: 100
    })
];

module.exports = {
    discounts: discounts,
    products: products,
    services: services
};