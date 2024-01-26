
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTodo, deleteTodo} from "./store/todos/slice.js";
import {nanoid} from "nanoid";
import {Col, Row, Space, Button, Input} from 'antd'
function App() {
const {todos} = useSelector(store => store.todos)
const [value,setValue] = useState('')
const dispatch = useDispatch()


  const addItem = () =>{
  const currentValue = value.trim()
   if (currentValue){
     dispatch(addTodo({
       id: nanoid(),
       title: value
     }))
     setValue('')
   }
  }
  const deleteItem = (id) =>{
    dispatch(deleteTodo(id))
  }
  const handleChange = (e) =>{
  setValue(e.target.value)
  }
  return (
    <>
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={12}>
          <Space >
            <Input style={{ minWidth: '100%' }} value={value} onChange={handleChange} placeholder="Enter todo" />
            <Button type="primary" onClick={addItem}>
              Add new
            </Button>
          </Space>
          <ul style={{ padding: '10px' }}>
            {todos.map((todo) => (
                <li  key={todo.id}  style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
                {todo.title}
                  <Space >
                <Button danger={"danger"} onClick={() => deleteItem(todo.id)}>
                  Delete
                </Button>
                  </Space>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

    </>
  )
}

export default App
