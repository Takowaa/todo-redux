import {createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

 export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async () => {
    const response = await axios("https://656d7f61bcc5618d3c23460f.mockapi.io/api/todos")
    return response.data
  }
)
export const addOneTodo = createAsyncThunk('/todos/addTodo', async (newTodo) =>{
  const {data} = await axios.post(`https://656d7f61bcc5618d3c23460f.mockapi.io/api/todos/`,newTodo)
  return data
})
export const updateTodo = createAsyncThunk('/todos/updateTodo', async (updatedTodo) =>{
  const {data} = await axios.put(`https://656d7f61bcc5618d3c23460f.mockapi.io/api/todos/${updatedTodo.id}`, updatedTodo)
  return data
})




export const deleteOneTodo = createAsyncThunk('/todos/deleteOneTodo', async (id) =>{
  const {data} = await axios.delete(`https://656d7f61bcc5618d3c23460f.mockapi.io/api/todos/${id}`)
  return data
})

