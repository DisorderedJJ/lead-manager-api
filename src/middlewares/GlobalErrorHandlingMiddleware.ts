import { Response, NextFunction, Request } from "express";
import LeadManInternalError from "../exception/LeadManInternalError";
import LoggerConfig from "../config/LoggerConfig";

export const SimpleErrorHandler = (error: LeadManInternalError, req: Request, res: Response, next: NextFunction) => {
  LoggerConfig.getLogger().error(`Error occured`, error);
  res.status(error.getStatus()).send({
    status: error.getStatus(),
    message: error.message,
  });
};
