"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
const product_respository_1 = require("./product.respository");
const typeorm_1 = require("@nestjs/typeorm");
let ProductService = class ProductService {
    getHello() {
        throw new Error('Method not implemented.');
    }
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async insertProduct(productDto) {
        const { pname, price } = productDto;
        const product = this.productRepository.create({ pname, price });
        await this.productRepository.save(product);
        return product;
    }
    async getAllProducts() {
        const found = await this.productRepository.find();
        if (!found)
            throw new common_1.NotFoundException('None of task assigned');
        return found;
    }
    async getProductById(id) {
        const found = await this.productRepository.findOneBy({ id: id });
        if (!found)
            throw new common_1.NotFoundException(`The task id ${id} NOT found`);
        return found;
    }
    async deleteTask(id) {
        const result = await this.productRepository.delete(id);
        console.log(result);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with id "${id}" not found `);
        }
    }
    async updateProduct(id, pname, price) {
        console.log('Id and price:' + id + ' ' + price);
        const product = await this.getProductById(id);
        product.pname = pname;
        product.price = price;
        await this.productRepository.save(product);
        return product;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_model_1.Product)),
    __metadata("design:paramtypes", [product_respository_1.ProductRepository])
], ProductService);
//# sourceMappingURL=product.service.js.map