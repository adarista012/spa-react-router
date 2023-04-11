import React from 'react'
import { useParams } from 'react-router-dom'

function ModularPage() {
    const data = useParams()
  return (
    <div className='containerModularPage'>
        <img src={`https://www.html6.es/img/rey_${data.title}.png`}/>
        <h1>{ data.title[0].toUpperCase()+data.title.slice(1) }</h1>
    </div>
  )
}

export default ModularPage
