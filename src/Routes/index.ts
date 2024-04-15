import { Router } from "express";
import TodoRoutes from "./Todo";

export default () => {
    const app = Router();
    TodoRoutes(app);

    return app;
}