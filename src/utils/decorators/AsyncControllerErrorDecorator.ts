import { NextFunction, Request, Response } from "express";
import LeadManInternalError from "../../exception/LeadManInternalError";
import LoggerConfig from "../../config/LoggerConfig";

function AsyncControllerHandle(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
    try {
      return await originalMethod.call(this, req, res, next);
    } catch (err) {
      LoggerConfig.getLogger().error(`Error occured in method name: ${methodName}`, err);
      if (err instanceof LeadManInternalError) {
        next(err);
      } else {
        next(new LeadManInternalError("Internal Error"));
      }
    }
  };
}

export default AsyncControllerHandle;
