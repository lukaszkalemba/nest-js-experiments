import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  getProducts() {
    return this.repo.find();
  }

  async getProduct(id: number) {
    const product = await this.repo.findOne({ where: { id } });

    return product;
  }

  async addProduct(body: CreateProductDto) {
    const product = this.repo.create(body);

    return await this.repo.save(product);
  }

  async removeProduct(id: number) {
    const product = await this.repo.findOne({ where: { id } });

    this.repo.remove(product);
  }

  async updateProduct(id: number, body: UpdateProductDto) {
    const product = await this.repo.findOne({ where: { id } });

    Object.assign(product, body);

    return await this.repo.save(product);
  }
}
