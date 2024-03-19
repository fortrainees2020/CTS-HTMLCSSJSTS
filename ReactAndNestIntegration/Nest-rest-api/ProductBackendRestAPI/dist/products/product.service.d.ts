import { Product } from './product.model';
import { ProductRepository } from './product.respository';
import { ProductDto } from './product-dto';
export declare class ProductService {
    private productRepository;
    getHello(): string;
    constructor(productRepository: ProductRepository);
    insertProduct(productDto: ProductDto): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    deleteTask(id: number): Promise<void>;
    updateProduct(id: number, pname: string, price: number): Promise<Product>;
}
