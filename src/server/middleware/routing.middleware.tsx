import routes from "client/routes";
import { Express, Request, Response } from "express";
import { renderReactAsync } from "../helpers/renderReactAsync";

async function handleRender(req: Request, res: Response) {
  try {
    const html = await renderReactAsync(req.url);
    return res.status(200).contentType("text/html").send(html);
  } catch {
    return res.status(500).send("Internal server error");
  }
}

/** Defines the server routings. */
export function useRouting(app: Express) {
  app.get(routes.home.value, handleRender);
  app.get(routes.history.value, handleRender);
}
