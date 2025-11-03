import { Request, Response, NextFunction } from "express";

export default class NotFoundMiddleware {
  static handle(req: Request, res: Response, next: NextFunction) {
    // Dans le cas ou chemin n'existe pas
    if (req.originalUrl.startsWith("/api")) {
      return res.status(404).json({
        error: `API ${req.originalUrl} endpoint not found`,
      });
    }
  }
}
