import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(+id);
  }

  @Post()
  addProduct(@Body() body: CreateProductDto) {
    return this.productsService.addProduct(body);
  }

  @Delete('/:id')
  @HttpCode(204)
  removeProduct(@Param('id') id: string) {
    return this.productsService.removeProduct(+id);
  }

  @Patch('/:id')
  updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productsService.updateProduct(+id, body);
  }
}
