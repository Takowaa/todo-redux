import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id:1,
      title: "name"
    }
  ],
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
        addTodo: (state,action) =>{
          console.log(current(state))
          state.todos = [...state.todos, action.payload]
        },
      deleteTodo: (state,action) => {
          state.todos = state.todos.filter((el) => el.id !== action.payload)
      }
  },
})


export const {  addTodo,deleteTodo} = todosSlice.actions

export default todosSlice.reducer