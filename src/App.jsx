import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { Col, Row, Space, Button, Input, Flex, List, Checkbox } from 'antd'
import {getTodos, deleteOneTodo, addOneTodo, updateTodo} from "./store/todos/actions.js";

function App() {
  const {todos} = useSelector(store => store.todos)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()


  const addItem = () => {
    const currentValue = value.trim()
    if (currentValue) {
      dispatch(addOneTodo({
        title: value,
        isCompleted: false,
      }))
      setValue('')
    }
  }
  const deleteItem = (id) => {

    dispatch(deleteOneTodo(id))
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleChangeStatus = (todo) =>{
      dispatch(updateTodo({...todo, isCompleted: !todo.isCompleted}))
  }
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch]);
  return (
    <Row style={{marginTop: '100px'}}>
      <Col span={12} offset={6}>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <Flex gap={16}>
            <Input value={value} onChange={handleChange} placeholder="Enter todo"/>
            <Button type="primary" onClick={addItem}>
              Add new
            </Button>
          </Flex>
          <List
            header={<div>Todo list items:</div>}
            bordered
            dataSource={todos}
            renderItem={(item) => (
              <List.Item>
                <Flex justify="space-between" style={{width: '100%'}} align={"center"}>
                  <Checkbox checked={item.isCompleted}  onChange={()=>handleChangeStatus(item)}/>
                  {item.title}
                  <Button danger="danger" onClick={() => deleteItem(item.id)}>
                    Delete
                  </Button>
                </Flex>
              </List.Item>
            )}
          />
        </Space>
      </Col>
    </Row>
  )
}

export default App