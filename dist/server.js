"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fake_data_1 = require("./data/Faker/fake.data");
const ProductService_1 = require("./services/ProductService");
const ProductController_1 = require("./controllers/ProductController");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.set("view engine", "pug");
app.set("views", path_1.default.join(__dirname, "views"));
const productController = new ProductController_1.ProductController(new ProductService_1.ProductService((0, fake_data_1.products)()));
// GET ALL
app.get("/products", (req, res) => res.send(productController.GetProducts(req.query.filter)));
// GET One
app.get("/products/:id", (req, res) => {
    let response = productController.GetProduct(+req.params.id);
    res.status(response.status).send({ message: response.message });
});
// POST
app.post("/products", (req, res) => res.status(201).send(productController.PostProduct(req.body)));
// PATCH
app.patch("/products/:id", (req, res) => {
    let response = productController.PatchProduct(req.params.id, req.body);
    res.status(response.status).send({
        message: response.message,
        products: response.products ? response.products : "",
    });
});
// // DELETE
app.delete("/products/:id", (req, res) => {
    let response = productController.DelProduct(req.params.id);
    res.status(response.status).send({
        message: response.message,
        products: response.products ? response.products : "",
    });
});
app.get("/", (req, res) => {
    res.render("index", { title: "hey" });
});
//Server
const PORT = 5000;
var server = app.listen(5000, () => {
    console.log(`Running at http://localhost:${PORT}`);
});
// server.close();
//# sourceMappingURL=server.js.map