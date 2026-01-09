import { EntitySchema } from "typeorm"; 

const UserEntity = new EntitySchema({
  name: "User",
  tableName: "users",

  columns:{
    id:{
      type: Number,
      primary: true,
      generated: true
    }, 
    email: {
      type: String,
      unique: true,
      nullable: false
    },
    password: {
      type: "varchar"
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
  relations:{
    todos: {
      type: "one-to-many",
      target: "Todo",
      inverseSide: "user"
    }
  }
});

export default UserEntity;