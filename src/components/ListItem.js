import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ListItem = ({ listItem }) => {
  return (
    <Row id={listItem.id}>
      <Col xs={10}>{listItem.text}</Col>
      <Col xs={2}>
        <FaEdit />
        <FaTrash />
      </Col>
    </Row>
  )
}

export default ListItem
