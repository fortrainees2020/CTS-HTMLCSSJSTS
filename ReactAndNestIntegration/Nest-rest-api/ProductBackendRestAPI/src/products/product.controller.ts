import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  //Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product-dto';
import { Product } from './product.model';
import { UpdateProductDto } from './update-product-dto';

@Controller('api')
export class ProductController {
  @Post('/products')
  addProduct(@Body() productDto: ProductDto): Promise<ProductDto> {
    return this.productService.insertProduct(productDto);
  }
  productRepository: any;
  constructor(private readonly productService: ProductService) {}

  @Get('/hello')
  getHello(): string {
    return this.productService.getHello();
  }

  @Get('/products')
  getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }
  @Get('/products/:id')
  getProductById(@Param('id') id: number): Promise<Product> {
    return this.productService.getProductById(id);
  }
  //Delete Task
  @Delete('/products/:id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    console.log('Id is :' + id);
    const result = await this.productService.deleteTask(id);
    console.log(result);
  }
  /* @Patch('/:id/price')
  updateTask(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const { price } = updateProductDto;
    return this.productService.updateProduct(id, price);
  }*/
  @Put('/products/:id')
  updateTask(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const { pname, price } = updateProductDto;
    console.log('Pname is :' + pname + 'and' + 'Price is : ' + price);
    return this.productService.updateProduct(id, pname, price);
  }
}
