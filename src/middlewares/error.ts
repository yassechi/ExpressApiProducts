import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'  

export default class ErrorMeddlewares {
  static handle(error: Error, req: Request, res: Response, next: NextFunction) {
    // Dans le cas ou j'ai un problemme dans une route qui concerne /API
    if (req.originalUrl.startsWith("/api")) {
      res.status(500).json({
        error: "Internal Server Error",
        message: error.message,
        stack: process.env.NODE_ENV === "dev" ?  error.stack : null
      });
    }
  }
}
