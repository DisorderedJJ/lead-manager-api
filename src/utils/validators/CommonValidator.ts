import LeadManDataInvalidError from "../../exception/LeadManDataInvalidError";

const validateNotNull = <T>(param: T | undefined, paramName: string, required: boolean = true) => {
  if (required && (param === null || param === undefined || param === "undefined")) {
    throw new LeadManDataInvalidError(`${paramName} value should not be null or undefined`);
  }
};

const validateNotEmptyOrBlankString = (param: string | undefined, paramName: string, required: boolean = true) => {
  validateNotNull<string>(param, paramName, required);
  if (required && param!.trim().length == 0) {
    throw new LeadManDataInvalidError(`${paramName} value should not be empty or blank`);
  }
};

const validateParamInADefinedValues = (param: string, definedValues: Array<string>, paramName: string) => {
  validateNotEmptyOrBlankString(param, paramName);
  if (!definedValues.includes(param)) {
    throw new LeadManDataInvalidError(`${paramName} should be a value from [${definedValues.toString()}]`);
  }
};

export default {
  validateNotNull: validateNotNull,
  validateNotEmptyOrBlankString: validateNotEmptyOrBlankString,
  validateParamInADefinedValues: validateParamInADefinedValues,
};
