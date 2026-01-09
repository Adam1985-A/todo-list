import express from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import { TodoController } from "../controllers/todo.controller.js";

const routes = express.Router();

const controller = new TodoController();

routes.use(AuthMiddleware);


routes.post("/", AuthMiddleware, controller.create);
routes.get("/", AuthMiddleware, controller.getAllTodos);
routes.get("/:id", AuthMiddleware, controller.getTodo);
routes.put("/:id", AuthMiddleware, controller.update);
routes.delete("/:id", AuthMiddleware, controller.delete);

export default routes;