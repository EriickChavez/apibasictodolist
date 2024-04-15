import { Request, Response } from "express";
import TodoDBController from "../Database/Controllers/TodoDBController";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../Models";

class TodoController {
  static async getAllTodos(req: Request, res: Response) {
    try {
      const todos = await TodoDBController.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async addTodo(req: Request, res: Response) {
    try {
      const todo: Todo = {
        ...req.body,
        id: uuidv4(),
      };
      const newTodo = await TodoDBController.addTodo(todo);
      res.status(200).json(newTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async updateTodo(req: Request, res: Response) {
    try {
      const updatedTodo = await TodoDBController.updateTodo(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteTodo(req: Request, res: Response) {
    try {
      const deletedTodo = await TodoDBController.deleteTodo(req.params.id);
      res.status(200).json(deletedTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default TodoController;
