import express from "express";
import { products as fakeProducts } from "./data/Faker/fake.data";
import { ProductService } from "./services/ProductService";
import { ProductController } from "./controllers/ProductController";
import path from "path";
import ErrorMiddlewares from "./middlewares/error";
import dotenv from "dotenv";
import NotFoundMiddleware from "./middlewares/notFound";
import helmet from "helmet";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";

//Config DotEnv
dotenv.config();

const app = express();

// Security DOSS-Attack
const limiter  = rateLimit({
  windowMs: 15 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-8', 
	legacyHeaders: false, 
	ipv6Subnet: 56, 
  message: "Beaucoup de requetes dans un peut de temsp",
});
app.use(limiter);

// Securiser le header response
app.use(helmet());

// parse l'object envoyer dans une requet en object javasript
app.use(express.json());

// Logs in termial for dev
app.use(morgan("dev"));

// Set views directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Set Static directory
app.use(express.static("./public"));

// Constructor => equivalant injection
const productController = new ProductController(
  new ProductService(fakeProducts())
);

//**PRODUCTS VIEWS */
app.get("/products", (req, res) => productController.ProductsRender(req, res));

//**PRODUCTS API */
// GET ALL
app.get("/api/products", (req, res) =>
  res.send(productController.GetProducts(req.query.filter as string))
);

// GET One
app.get("/api/products/:id", (req, res) => {
  let response = productController.GetProduct(+req.params.id);
  res.status(response.status).send({ message: response.message });
});

// POST
app.post("/api/products", (req, res) =>
  res.status(201).send(productController.PostProduct(req.body))
);

// PATCH
app.patch("/api/products/:id", (req, res) => {
  let response = productController.PatchProduct(req.params.id, req.body);
  res.status(response.status).send({
    message: response.message,
    products: response.products ? response.products : "",
  });
});

// DELETE
app.delete("/api/products/:id", (req, res) => {
  let response = productController.DelProduct(req.params.id);
  res.status(response.status).send({
    message: response.message,
    products: response.products ? response.products : "",
  });
});

// Middlewarese
app.use(NotFoundMiddleware.handle);
app.use(ErrorMiddlewares.handle);



//Server
const PORT = 5000;
var server = app.listen(5000, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
// server.close();
