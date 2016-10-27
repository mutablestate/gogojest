import React from 'react'

export const MyComponent = ({ countries })  => {
  const list = countries.map((country, i) => (
    <li key={i}>{country.name}</li>
  ))

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {list}
      </ul>
    </div>
  )
}
