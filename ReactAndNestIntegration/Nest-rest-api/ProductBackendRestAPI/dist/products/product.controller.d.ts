import { ProductService } from './product.service';
import { ProductDto } from './product-dto';
import { Product } from './product.model';
import { UpdateProductDto } from './update-product-dto';
export declare class ProductController {
    private readonly productService;
    addProduct(productDto: ProductDto): Promise<ProductDto>;
    productRepository: any;
    constructor(productService: ProductService);
    getHello(): string;
    getAllProducts(): Promise<Product[]>;
    getTaskById(id: number): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
    updateTask(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
}
