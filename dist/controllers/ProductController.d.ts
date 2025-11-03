import { IProduct } from "../interfaces/product";
import { ProductService } from "./../services/ProductService";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    GetProducts(req: string): any[];
    GetProduct(id: number): {
        status: number;
        message: string;
    } | {
        status: number;
        message: IProduct;
    };
    PostProduct(product: IProduct): IProduct[];
    PatchProduct(id: string, product: IProduct): {
        status: number;
        message: string;
        products?: never;
    } | {
        status: number;
        message: string;
        products: IProduct[];
    };
    DelProduct(id: string): {
        status: number;
        message: string;
        products?: never;
    } | {
        status: number;
        message: string;
        products: IProduct[];
    };
}
//# sourceMappingURL=ProductController.d.ts.map