import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import TodoEntity from "../entities/todo.entity.js";
import UserEntity from "../entities/user.entity.js";

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    host: "localhost",
    port: [5432, 10],
    username: "postgres",
    password: "saidat1985",
    database: "todo-list",
    synchronize: true,
    logging: false,
    ssl: process.env.NODE_ENV === "production" 
    ? { rejectUnauthorized: false } 
    : false,
    entities: [TodoEntity, UserEntity],
    migrations: [],
    subscribers: [],
});

export default AppDataSource;