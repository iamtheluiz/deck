import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main: React.FC = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5252')
      .then(response => {
        console.log(response)
        setMessage(response.data.message)
      })
  })

  return (
    <h1>{message}</h1>
  )
}

export default Main
