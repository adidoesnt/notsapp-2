import { signup, delete as delete_, read, readAll } from "@api/controllers";
import { Request, Response, Router, request } from "express";

const router = Router();

router.get("/users", async (request: Request, response: Response) => {
  return await readAll(request, response);
});

router.get("/user", async (request: Request, response: Response) => {
  return await read(request, response);
});

router.post("/signup", async (request: Request, response: Response) => {
  return await signup(request, response);
});

router.delete("/delete", async (request: Request, response: Response) => {
  return await delete_(request, response);
});

export default router;
