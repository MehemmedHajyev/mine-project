import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (<>
    <div className='p-3 mb-2 bg-dark text-white'>
      <Link  className='text-white' to='/'>Go Login</Link>
    </div>
     <h1> Welcome Home</h1>
  </>
 
  )
}

export default Home