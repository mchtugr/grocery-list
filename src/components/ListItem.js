import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ListItem = ({ listItem, handleEdit, handleDelete }) => {
  return (
    <Row id={listItem.id}>
      <Col xs={10}>{listItem.text}</Col>
      <Col xs={2}>
        <FaEdit onClick={() => handleEdit(listItem.id)} />
        <FaTrash onClick={() => handleDelete(listItem.id)} />
      </Col>
    </Row>
  )
}

export default ListItem
