import { Router } from "express";

import helmet from "helmet";
import cors from "cors";
import { limiter } from "./limiter";
import bodyParser from "body-parser";

const middleware = async (app: Router) => {
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(cors());
  app.use(limiter);
  return app;
};

export { middleware };
