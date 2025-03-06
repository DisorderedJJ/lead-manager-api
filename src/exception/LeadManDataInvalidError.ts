import LeadManInternalError from "./LeadManInternalError";

class LeadManDataInvalidError extends LeadManInternalError {
  constructor(message: string) {
    super(message, 400);
  }
}

export default LeadManDataInvalidError;
