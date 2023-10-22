import { signup } from "@api/controllers";
import { Request, Response, Router } from "express";

const router = Router();

router.post("/signup", async (request: Request, response: Response) => {
  return await signup(request, response);
});

export default router;
