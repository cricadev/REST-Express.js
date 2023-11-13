const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    const products = Array.from({ length: limit }, () => ({
      id: faker.datatype.uuid(),
      productName: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    }));
    this.products = [...this.products, ...products];
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }
}

module.exports = ProductsService;
