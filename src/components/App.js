import React from 'react'
import { Container, Form } from 'react-bootstrap'
import List from './List'
import Message from './Message'

const App = () => {
  const handleSubmit = () => {
    console.log('submitted')
  }
  return (
    <Container>
      <h1>Grocery List</h1>
      <Message />
      <Form onSubmit={handleSubmit}></Form>
      <List />
    </Container>
  )
}

export default App
