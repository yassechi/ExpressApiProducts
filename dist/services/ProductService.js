"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    products;
    constructor(products) {
        this.products = products;
        this.products = products;
    }
    FindAll(req) {
        if (req) {
            let properties = req.split(",");
            let filtredProducts = [];
            filtredProducts = this.products.map((product) => {
                const filtredProduct = {};
                properties?.forEach((property) => {
                    if (product.hasOwnProperty(property)) {
                        filtredProduct[property] = product[property];
                    }
                });
                return filtredProduct;
            });
            return filtredProducts;
        }
        return this.products;
    }
    FindOne(id) {
        if (isNaN(id)) {
            return { status: 404, message: `\"${id}\" Invalid product id ! ` };
        }
        let prod = this.products.find((p) => p.id == id);
        if (!prod) {
            return { status: 404, message: "product not foud !" };
        }
        return { status: 200, message: prod };
    }
    AddProduct(product) {
        this.products = [
            ...this.products,
            { ...product, id: this.products.length + 1 },
        ];
        return this.products;
    }
    UpdateProduct(id, obj) {
        if (isNaN(+id)) {
            return {
                status: 404,
                message: "Product id is not valid ! ",
            };
        }
        const prod = this.products.find((p) => p.id === +id);
        if (prod) {
            let idx = this.products.findIndex((x) => x.id === +id);
            this.products[idx] = { ...prod, ...obj };
        }
        else {
            return {
                status: 404,
                message: "Product not exists !",
            };
        }
        return {
            status: 201,
            message: "Product succefuly updated",
            products: this.products,
        };
    }
    RemoveProduct(id) {
        if (isNaN(+id)) {
            return {
                status: 404,
                message: "Product ID is not valid !!",
            };
        }
        else {
            let prod = this.products.find((p) => p.id === +id);
            if (!prod) {
                return {
                    status: 404,
                    message: "Product not founded !",
                };
            }
        }
        this.products = this.products.filter((p) => p.id != +id);
        return {
            status: 201,
            message: `product id: ${id} has been succefuly deleted !`,
            products: this.products,
        };
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map