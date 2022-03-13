import { NextFunction, Request, Response } from "express";
import { renderReactAsync } from "../helpers/renderReactAsync";

export function reactMiddleware() {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const reactHtml = await renderReactAsync(req.url);
      res.set("content-type", "text/html").status(200).send(reactHtml);
    } catch (error) {
      next(error);
    }
  };
}
