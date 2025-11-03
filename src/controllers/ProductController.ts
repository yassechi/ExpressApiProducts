import { title } from "process";
import { IProduct } from "../interfaces/product";
import { ProductService } from "./../services/ProductService";
import { Request, Response } from "express";

export class ProductController {
  constructor(private productService: ProductService) {}

  GetProducts(req: string) {
    // Test ErrorMiddleware
    // throw new Error('Probleme Serveur dans le get All Products !')
    return this.productService.FindAll(req);
  }

  GetProduct(id: number) {
    return this.productService.FindOne(id);
  }

  PostProduct(product: IProduct) {
    return this.productService.AddProduct(product);
  }

  PatchProduct(id: string, product: IProduct) {
    return this.productService.UpdateProduct(id, product);
  }

  DelProduct(id: string) {
    return this.productService.RemoveProduct(id);
  }

  ProductsRender(req: Request, res: Response) {
    res.render("products", {
      title: "Products",
      pageTitle: "API Products",
      products : this.productService.FindAll(undefined)
    });
  }
}
