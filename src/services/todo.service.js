import AppDataSource from "../database/data-source";
import TodoEntity from "../entities/todo.entity.js";

export class TodoService {
	constructor() {
		this.repository = AppDataSource.getRepository(TodoEntity);
		
	}

	async getTodos(userId) {
		if (!userId) {
    throw new Error("User id missing");
  }
		return await this.repository.find({
			where: {
				user: {id: userId}
			}
		});
	}

	async getTodoById(id){
		const todo = await this.repository.findOne({
			where: {id: parseInt(id)}
		});

		if(!todo){
			throw new Error("Todo not find");
		}
		return todo;
	
	}

	async createTodo(payload, userId) {
		const todo = this.repository.create({...payload, user: {id: userId}
		});
		return await this.repository.save(todo);
	}

	// Additional service methods can be added here
	// e.g., updateTodo, deleteTodo, etc.

	async updateTodo(id, payload) {
	
		const todo = await this.getTodoById(id);
		//merge existing todo with updates
		Object.assign(todo, payload);
			return await this.repository.save(todo);
		}
		

	async deleteTodo(id) {
		// Implementation for deleting a todo item
		const todo = await this.getTodoById(id);
		await this.repository.remove(todo);
		return {message: "Todo deleted successfully", id};
		}
	

}

export default TodoService;
