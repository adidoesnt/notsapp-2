import { Request, Response, Express } from "express";
import { RES } from "@constants";
import { router } from "@api/routes";

const initRoutes = (app: Express) => {
  app.get("/", (_: Request, response: Response) => {
    const { status, message } = RES.SUCCESS.DEFAULT;
    response.status(status).json({
      message,
    });
  });
  app.use(router);
};

export default initRoutes;
