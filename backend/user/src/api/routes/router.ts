import { signup, delete as delete_ } from "@api/controllers";
import { Request, Response, Router } from "express";

const router = Router();

router.post("/signup", async (request: Request, response: Response) => {
  return await signup(request, response);
});

router.delete("/delete", async (request: Request, response: Response) => {
  return await delete_(request, response);
});

export default router;
