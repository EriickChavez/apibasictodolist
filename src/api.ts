import express from "express";
import { CONFIG } from "./Config/ENV";
import Routes from "./Routes";
import { middleware } from "./Middlewares";

class Api {
  private api: express.Application = express();
  private BASE_URL: string = CONFIG.baseUrl;
  private PORT: number = CONFIG.port;

  constructor() {
    Promise.resolve(this.init()).then(() => this.start());
  }

  public async init() {
    this.initializeMiddlewares();
    this.loadRoutes();
    this.routeNotFound();
  }

  private loadRoutes() {
    this.api.use("/", Routes());
  }
  private initializeMiddlewares() {
    middleware(this.api);
  }
  private routeNotFound() {
    this.api.use((req, res, next) => {
      console.warn(
        `404 - Not Found: ${this.BASE_URL}:${this.PORT}${req.originalUrl}`
      );
      res.status(404).json({ message: "Not Found" });
    });
  }
  private start() {
    this.api
      .listen(this.PORT, () => {
        console.info("Server running at PORT: ", this.PORT);
      })
      .on("error", (error) => {
        // gracefully handle error
        throw new Error(error.message);
      });
  }
}

export default Api;
