import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='containerHome'>
      <Link className='buttonLink' to='/atanagildo/atanagildo'><img src='https://www.html6.es/img/rey_atanagildo.png'/></Link>
      <Link className='buttonLink' to='/ataulfo/ataulfo'><img src='https://www.html6.es/img/rey_ataulfo.png'/></Link>
      <Link className='buttonLink' to='/ervigio/ervigio'><img src='https://www.html6.es/img/rey_ervigio.png'/></Link>
      <Link className='buttonLink' to='/leovigildo/leovigildo'><img src='https://www.html6.es/img/rey_leovigildo.png'/></Link>
    </div>
  )
}

export default HomePage
