import express, { Express } from "express";
import http from "http";
import cors from "cors";
import configs from "./config/configs";
import { SimpleErrorHandler } from "./middlewares/GlobalErrorHandlingMiddleware";
import LoggerConfig from "./config/LoggerConfig";
import leadRoute from "./routes/LeadRoute";

const app: Express = express();
const server: http.Server = http.createServer(app);

// cors and json middlewares
app.use(
  cors({
    origin: configs.corsAllowedOrigin,
  })
);

app.use(express.json());

// Buisness logic routes
app.use("/leads", leadRoute);

/* Global middlewares
 * 1- Error handling middleware
 */
app.use(SimpleErrorHandler);

server.listen(configs.port, () => {
  LoggerConfig.getLogger().info(`Server Listening on PORT: ${configs.port}`);
});
