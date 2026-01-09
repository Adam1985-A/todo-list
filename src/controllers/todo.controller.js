import { TodoService } from "../services/todo.service.js";

export class TodoController {
  constructor() {
    this.service = new TodoService();

    this.getAllTodos = this.getAllTodos.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAllTodos(req, res){
    try {
      const todos = await this.service.getTodos(req.user.id);
      return res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTodo(req, res) {
    try {
      const id = req.params.id;
      const todo = await this.service.getTodoById(id);
      if (todo) {
        return res.status(200).json(todo);
      } else {
        return res.status(404).json({ message: "Todo not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const userId = req.user.id;
      const payload = { ...req.body };
      const newTodo = await this.service.createTodo(payload, userId);
      return res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedTodo = await this.service.updateTodo(id, req.body);
      if (updatedTodo) {
        return res.status(200).json(updatedTodo);
      } else {
        return res.status(404).json({ message: "Todo not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedTodo = await this.service.deleteTodo(id);
      if (deletedTodo) {
        return res.status(200).json({ message: "Todo deleted successfully" });
      } else {
        return res.status(404).json({ message: "Todo not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default TodoController;