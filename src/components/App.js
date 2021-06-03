import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import List from './List'
import Message from './Message'

const App = () => {
  const [query, setQuery] = useState('')
  const [list, setList] = useState([
    { id: 1, text: 'water' },
    { id: 2, text: 'soda' },
  ])
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query) return
    if (isEditing) {
    } else {
      console.log('submitted')
      setQuery('')
    }
  }

  return (
    <Container>
      <h1 className='text-center'>Grocery List</h1>
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
              {isEditing ? 'Edit' : 'Add'}
            </Button>
          </Col>
        </Row>
      </Form>
      <List list={list} />
    </Container>
  )
}

export default App
