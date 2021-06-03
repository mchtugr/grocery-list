import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ListItem from './ListItem'

const List = ({ list }) => {
  return (
    <div>
      {list.map((listItem) => (
        <ListItem listItem={listItem} />
      ))}
    </div>
  )
}

export default List
