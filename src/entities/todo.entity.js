import {EntitySchema} from "typeorm";

const TodoEntity = new EntitySchema({
    name: "Todo",
    tableName: "todos",

    columns: { 
        id: {
            type: Number,
            primary: true, 
            generated: true
        },
        title: {
            type: String,
            nullable: false
        },
        completed: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: "timestamp",
            createDate: true
        },
        updatedAt: {
            type: "timestamp",
            updateDate: true
        }
    },
    relations: {
        user: {
            type: "many-to-one",
            target: "User",
            joinColumn: true,
            onDelete: "CASCADE"
        }
    }
});

export default TodoEntity;