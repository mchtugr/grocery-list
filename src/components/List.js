import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ListItem from './ListItem'

const List = ({ list, handleEdit, handleDelete, handleClear }) => {
  return (
    <div>
      {list.map((listItem) => (
        <ListItem
          listItem={listItem}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
      <Button variant='danger' onClick={handleClear}>
        Clear All
      </Button>
    </div>
  )
}

export default List
