import { IProduct } from "../interfaces/product";
export declare class ProductService {
    private products;
    constructor(products: IProduct[]);
    FindAll(req: string): any[];
    FindOne(id: number): {
        status: number;
        message: string;
    } | {
        status: number;
        message: IProduct;
    };
    AddProduct(product: IProduct): IProduct[];
    UpdateProduct(id: string, obj: any): {
        status: number;
        message: string;
        products?: never;
    } | {
        status: number;
        message: string;
        products: IProduct[];
    };
    RemoveProduct(id: string): {
        status: number;
        message: string;
        products?: never;
    } | {
        status: number;
        message: string;
        products: IProduct[];
    };
}
//# sourceMappingURL=ProductService.d.ts.map