import {createSlice, current} from '@reduxjs/toolkit'
import {getTodos, deleteOneTodo, addOneTodo, updateTodo} from "./actions.js";

const initialState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
        addTodo: (state,action) =>{
          console.log(current(state))
          state.todos = [...state.todos, action.payload]
        }
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state,action) =>{
            state.todos = action.payload
    }).addCase(deleteOneTodo.fulfilled, (state,action) =>{
      console.log(action.payload)
      state.todos = state.todos.filter((el) => el.id !== action.payload.id)
    }).addCase(addOneTodo.fulfilled, (state,action) =>{
      state.todos = [...state.todos, action.payload]
    }).addCase(updateTodo.fulfilled, (state,action) => {
     state.todos = state.todos.map((el)=>{
          return  el.id === action.payload.id ? action.payload : el
     })
    })
  }
})
export const {  addTodo,deleteTodo} = todosSlice.actions
export default todosSlice.reducer