import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ListItem = ({ listItem, handleEdit, handleDelete }) => {
  //cross/uncross the item onClick
  const handleCheck = (id) => {
    const textField = document.getElementById(id)
    if (textField.classList.contains('checked')) {
      textField.classList.remove('checked')
    } else {
      textField.classList.add('checked')
    }
  }
  return (
    <Row className='border rounded list-item-container'>
      <Col
        md={10}
        xs={9}
        id={listItem.id}
        className='text-capitalize list-item'
        onClick={() => handleCheck(listItem.id)}
      >
        {listItem.text}
      </Col>

      {/* Button Container */}
      <Col md={2} xs={3} className='icon-container align-middle'>
        <div className='mr-1'>
          <FaEdit
            size='1.2rem'
            onClick={() => handleEdit(listItem.id)}
            className='icon edit-icon'
          />
        </div>
        <div className='ml-1'>
          <FaTrash
            size='1.2rem'
            onClick={() => handleDelete(listItem.id)}
            className='icon delete-icon'
          />
        </div>
      </Col>
    </Row>
  )
}

export default ListItem
