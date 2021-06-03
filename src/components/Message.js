import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, text, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  }, [removeAlert])
  return (
    <Alert variant={variant} className='text-center p-1'>
      {text}
    </Alert>
  )
}

export default Message
