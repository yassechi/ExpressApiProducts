import { faker } from "@faker-js/faker";
import { IProduct } from "../../interfaces/product";

export const products = (): IProduct[] => {
  return Array.from({ length: 25 }, (_, idx) => {
    return {
      id: idx + 1,
      title: faker.commerce.productName(), // 'Incredible Soft Gloves'
      desc: faker.commerce.productDescription(), // 'Featuring Phosphorus-enhanced technology, our Fish offers unparalleled Modern performance'
      price: +faker.commerce.price({ min: 100, max: 200 }),
    };
  });
};
