import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.model';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}
