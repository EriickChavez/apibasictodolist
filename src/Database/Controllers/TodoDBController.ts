import { Collection, Db } from "mongodb";
import { InputTodo, Todo } from "../../Models";
import { client } from "../connect_db";

class TodoDBController {
  db: Db;
  todoDB: Collection<Todo>;

  constructor() {
    this.db = client.db("GymApp");
    this.todoDB = this.db.collection<Todo>("Todo");
  }

  async getAllTodos(): Promise<Todo[]> {
    try {
      const todos = await this.todoDB.find({}).toArray();
      return todos;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async addTodo(todo: Todo): Promise<Todo> {
    try {
      await this.todoDB.insertOne(todo);
      const newTodo = await this.todoDB.findOne({ id: todo.id });
      if (newTodo) return newTodo;

      throw new Error("Todo not created");
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async updateTodo(id: string, todo: InputTodo): Promise<Todo> {
    try {
      await this.todoDB.updateOne({ id }, { $set: todo });
      const newTodo = await this.todoDB.findOne({ id });

      if (newTodo) return newTodo;
      throw new Error("Todo not updated");
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async deleteTodo(id: string): Promise<boolean> {
    try {
      await this.todoDB.deleteOne({ id });
      const todo = await this.todoDB.findOne({ id });
      if(!todo) return true;
      throw new Error("Todo not deleted");
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default new TodoDBController();
