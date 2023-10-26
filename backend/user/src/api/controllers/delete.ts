import { delete as delete_ } from "@api/services";
import { RES } from "@constants";
import { Request, Response } from "express";

const deleteController = async (request: Request, response: Response) => {
  const { query } = request;
  const { uuid } = query;
  await delete_(uuid as string);
  const { status, message } = RES.SUCCESS.DEFAULT;
  return response.status(status).json({
    message,
  });
};

export default deleteController;
