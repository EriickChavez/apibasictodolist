import { Router } from "express";
import TodoController from "../../Controller/TodoController";

const route = Router();

const TodoRoutes = (app: Router) => {
  app.use("/todo", route);

  route.get("/", TodoController.getAllTodos);
  route.post("/add", TodoController.addTodo);
  route.put("/update", TodoController.updateTodo);
  route.delete("/delete", TodoController.deleteTodo);
};

export default TodoRoutes;
