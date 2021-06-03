import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ListItem = ({ listItem, handleEdit, handleDelete }) => {
  const handleCheck = (id) => {
    const textField = document.getElementById(id)
    if (textField.classList.contains('checked')) {
      textField.classList.remove('checked')
    } else {
      textField.classList.add('checked')
    }
  }
  return (
    <Row
      className='border rounded list-item-container'
      onClick={() => console.log('clicked')}
    >
      <Col
        xs={9}
        id={listItem.id}
        className='text-capitalize'
        onClick={() => handleCheck(listItem.id)}
      >
        {listItem.text}
      </Col>
      <Col xs={3} className='icon-container'>
        <FaEdit
          onClick={() => handleEdit(listItem.id)}
          className='icon edit-icon'
        />
        <FaTrash
          onClick={() => handleDelete(listItem.id)}
          className='icon delete-icon'
        />
      </Col>
    </Row>
  )
}

export default ListItem
