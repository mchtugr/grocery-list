import React from 'react'
import { Button } from 'react-bootstrap'
import ListItem from './ListItem'

const List = ({ list, handleEdit, handleDelete, handleClear }) => {
  return (
    <div>
      {list.map((listItem) => (
        <ListItem
          listItem={listItem}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          key={listItem.id}
        />
      ))}

      {/* If there is a list item, Clear all btn appears */}
      {list.length > 0 && (
        <div className='btn-container'>
          <Button variant='custom' onClick={handleClear} className=' mt-2'>
            Clear All
          </Button>
        </div>
      )}
    </div>
  )
}

export default List
