import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber({}, { message: 'Price must be a number' })
  @IsOptional()
  price?: number;
}
