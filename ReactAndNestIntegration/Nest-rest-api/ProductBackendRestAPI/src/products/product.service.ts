import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { ProductRepository } from './product.respository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from './product-dto';

@Injectable()
export class ProductService {
  getHello(): string {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Product)
    private productRepository: ProductRepository,
  ) {}

  //Create a new Product
  async insertProduct(productDto: ProductDto): Promise<Product> {
    const { pname, price } = productDto;
    const product = this.productRepository.create({ pname, price });
    await this.productRepository.save(product);
    return product;
  }

  //Get all Products
  async getAllProducts(): Promise<Product[]> {
    const found = await this.productRepository.find();
    if (!found) throw new NotFoundException('None of task assigned');
    return found;
  }

  //------Get Product BY ID
  async getProductById(id: number): Promise<Product> {
    const found = await this.productRepository.findOneBy({ id: id });
    if (!found) throw new NotFoundException(`The task id ${id} NOT found`);
    return found;
  }

  //Delete Task
  async deleteTask(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException(`Productwith id "${id}" not found `);
    }
  }

  /*async updateProduct(id: number, price: number): Promise<Product> {
    console.log('Id and price:' + id + ' ' + price);
    const product = await this.getProductById(id);
    product.price = price;
    await this.productRepository.save(product);
    return product;
  }*/
  async updateProduct(
    id: number,
    pname: string,
    price: number,
  ): Promise<Product> {
    console.log('Id and price:' + id + ' ' + price);
    const product = await this.getProductById(id);
    product.pname= pname;
    product.price = price;
    await this.productRepository.save(product);
    return product;
  }
}
