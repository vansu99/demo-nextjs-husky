import React from 'react'

export default function Header() {
  const handleShow = () => {
    console.log('show')
  }

  return (
    <div>
      Header
      <button onClick={handleShow}>Show</button>
    </div>
  )
}
