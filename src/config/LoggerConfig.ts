import winston from "winston";
import "winston-daily-rotate-file";
const consoleTransport = new winston.transports.Console();

const LeadManLogger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [consoleTransport],
});

const getLogger = (): winston.Logger => {
  return LeadManLogger;
};

export default {
  getLogger: getLogger,
};
