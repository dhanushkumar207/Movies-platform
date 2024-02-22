import React from 'react'
import {Link} from 'react-router-dom';
 const Amazon = () => {
  return (
    <>
    <div className='container'>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SqrmLivms0HUdSeumGWnLfdk81r6zQen-w&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title"> Deepwater Horizon</h4>
                </Link>
                <p className="reting">Rating: 9
            </p>
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1SeIpITYtMkvWCLJW1n_E6ThHtEM3f1vjg&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">The Last Witch Hunter</h4>
                </Link>
                <p className="reting">Rating:8.5</p>
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14p5grLmkBujbZ8JOPY2fgXvUwBfDWd5PZw&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Gods of Egypt</h4>
                </Link>
                <p className="reting">Rating:8</p>
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7i95w5FpoNW3d8QbMV_bn-RyPGsdz2x63A&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Robin Hood</h4>
                </Link>
                <p className="reting">Rating:9</p>
            </div>
            
        </div>
    </div>
    </div>
    <div className='container1'>
    <div classname="movie">
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5itvlMrClGgTkTwTQ0fIuFS--e9eMiBfoMA&usqp=CAU' alt='poster'></img>
       <div className='movie details'>
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">The Hunger Games: Mockingjay – Part 2</h4>
                </Link>
                <p className="reting">Rating:9</p>
            </div>
        </div>
    </div>
    </div>
    <Link to='/mx'className=" star" >Mxplayer</Link>
    <Link to='/zee'className=" star" >Zee5</Link>
    <Link to='/hotstar'className=" star"    >Hotstar</Link>
 



    </>
)
}
  
export default Amazon;
