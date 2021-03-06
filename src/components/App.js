import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
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
  const [editItem, setEditItem] = useState({})
  const [alertOptions, setAlertOptions] = useState({
    variant: '',
    text: '',
  })
  const [showAlert, setShowAlert] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    //if input is empty, disable submit
    if (!query) return
    // if a current item is edited, update the list
    if (isEditing && query) {
      setIsEditing(false)
      let index = groceryList.indexOf(editItem)
      let newList = [...groceryList]
      newList.splice(index, 1, { id: editItem.id, text: query })
      setGroceryList(newList)
      setQuery('')
      handleAlert('info', 'Item updated')
    }
    // if it is a new item, add it to the list
    else {
      const newItem = { id: `id${new Date().getTime()}`, text: query }
      setGroceryList([...groceryList, newItem])
      setQuery('')
      handleAlert('success', 'Item added')
    }
  }
  // edit specific list item
  const handleEdit = (id) => {
    setIsEditing(true)
    let editItem = groceryList.find((item) => item.id === id)
    setEditItem(editItem)
    setQuery(editItem.text)
  }
  // delete specific list item
  const handleDelete = (id) => {
    const filteredList = groceryList.filter((item) => item.id !== id)
    setGroceryList(filteredList)
    setQuery('')
    handleAlert('danger', 'Item deleted')
  }
  // clear all list items
  const handleClear = () => {
    localStorage.removeItem('groceryList')
    setGroceryList([])
    setQuery('')
    handleAlert('danger', 'Cleared all')
  }
  // Sets Message component props
  const handleAlert = (variant, text) => {
    setAlertOptions({ variant, text })
    setShowAlert(true)
  }

  //remove Message component
  const removeAlert = () => {
    setShowAlert(false)
  }

  useEffect(() => {
    // when grocery list updated, update the local storage as well
    localStorage.setItem('groceryList', JSON.stringify(groceryList))
  }, [groceryList])

  return (
    <>
      <Row className='justify-content-center'>
        <h1 className='text-center m-3'>Grocery List</h1>
      </Row>
      <Row className='justify-content-center'>
        <Col xl={5} lg={6} md={8} xs={10} className='app-wrapper p-4 rounded'>
          {/* Alert Screen */}
          {showAlert && (
            <Message
              variant={alertOptions.variant}
              text={alertOptions.text}
              removeAlert={removeAlert}
            />
          )}

          <Form onSubmit={handleSubmit}>
            <Row className='center mb-3'>
              <Col xs={8}>
                <Form.Control
                  controlId='query'
                  type='text'
                  placeholder='Milk'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></Form.Control>
              </Col>
              <Col xs={3} className='center'>
                <Button variant='custom' type='submit'>
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
        </Col>
      </Row>
    </>
  )
}

export default App
