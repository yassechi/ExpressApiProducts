"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const faker_1 = require("@faker-js/faker");
const products = () => {
    return Array.from({ length: 25 }, (_, idx) => {
        return {
            id: idx + 1,
            title: faker_1.faker.commerce.productName(), // 'Incredible Soft Gloves'
            desc: faker_1.faker.commerce.productDescription(), // 'Featuring Phosphorus-enhanced technology, our Fish offers unparalleled Modern performance'
            price: +faker_1.faker.commerce.price({ min: 100, max: 200 }),
        };
    });
};
exports.products = products;
//# sourceMappingURL=fake.data.js.map