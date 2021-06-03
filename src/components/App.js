import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import List from './List'
import Message from './Message'

// returns a list from local storage *** will be used in state
const getGroceryListFromLocalStorage = () => {
  let groceryList = localStorage.getItem('groceryList')
  if (groceryList) {
    return JSON.parse(groceryList)
  }
  //if no list available in the local storage, state will be empty
  else {
    return []
  }
}

const App = () => {
  const [query, setQuery] = useState('')
  const [groceryList, setGroceryList] = useState(
    getGroceryListFromLocalStorage()
  )
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    //if input is empty, disable submit
    if (!query) return
    // if a current item is edited, update the list
    if (isEditing) {
    }
    // if it is a new item, add it to the list
    else {
      const newItem = { id: `id${new Date().getTime()}`, text: query }
      setGroceryList([...groceryList, newItem])
      setQuery('')
    }
  }
  // edit specific list item
  const handleEdit = (id) => {
    console.log(id)
  }
  // delete specific list item
  const handleDelete = (id) => {
    const filteredList = groceryList.filter((item) => item.id !== id)
    setGroceryList(filteredList)
  }
  // clear all list items
  const handleClear = () => {
    localStorage.removeItem('groceryList')
    setGroceryList([])
  }

  useEffect(() => {
    // when grocery list updated, update the local storage as well
    localStorage.setItem('groceryList', JSON.stringify(groceryList))
  }, [groceryList])

  return (
    <Container>
      <h1 className='text-center'>Grocery List</h1>
      {/* Alert Screen */}
      <Message />
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={11}>
            <Form.Group controlId='query'>
              <Form.Control
                type='text'
                placeholder='Milk'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col xs={1}>
            <Button variant='primary' type='submit'>
              {/* Conditional Render acc to isEditing state */}
              {isEditing ? 'Edit' : 'Add'}
            </Button>
          </Col>
        </Row>
      </Form>
      {/* grocery list screen */}
      <List
        list={groceryList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleClear={handleClear}
      />
    </Container>
  )
}

export default App
