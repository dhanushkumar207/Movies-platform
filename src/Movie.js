import React from 'react'
import {Link} from 'react-router-dom'
const Movie = () => {
  return (
    <div className='movie'>
      
<Link to='/hotstar' >Hotstar</Link>
<Link to='/amazon' >Amazon</Link>
<Link to='/zee' >Zee5</Link>
<Link to='/mx' >Mxplayer</Link>    

    </div>
  )
}

export default Movie