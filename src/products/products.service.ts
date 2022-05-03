import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

let products = [
  { id: 1, title: 'Mleko', price: 3.5 },
  { id: 2, title: 'Mąka', price: 2.9 },
];

@Injectable()
export class ProductsService {
  getProducts() {
    return products;
  }

  getProduct(id: number) {
    return products.find((product) => product.id === id);
  }

  addProduct(body: CreateProductDto) {
    const product = { id: products.length + 1, ...body };
    products.push(product);

    return product;
  }

  removeProduct(id: number) {
    products = products.filter((product) => product.id === id);
  }

  updateProduct(id: number, body: UpdateProductDto) {
    const product = products.find((product) => product.id === id);

    Object.assign(product, body);

    return product;
  }
}
