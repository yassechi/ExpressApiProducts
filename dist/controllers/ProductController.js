"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    GetProducts(req) {
        return this.productService.FindAll(req);
    }
    GetProduct(id) {
        return this.productService.FindOne(id);
    }
    PostProduct(product) {
        return this.productService.AddProduct(product);
    }
    PatchProduct(id, product) {
        return this.productService.UpdateProduct(id, product);
    }
    DelProduct(id) {
        return this.productService.RemoveProduct(id);
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map