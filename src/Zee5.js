import React from 'react'
import {Link} from 'react-router-dom';
const Zee5 = () => {
  return (
    <>
    
    <div className='container'>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTs1SKaP7zUUwo0FZVfwE44vCy9gsywsz-kw&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Yaan</h4>
                </Link>
                <p className="reting">Rating: 9
            </p>
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxX_YpoZQLEVTIJYJZJTH7DPttt14kE83Bw&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Goli Soda</h4>
                </Link>
                <p className="reting">Rating:8</p>
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojT5dVyNh5-9abPdYy_k19TSN_sHf3lOuuw&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Yaamirukka Bayamey</h4>
                </Link>
                <p className="reting">Rating:8.5</p>
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchfNPw_VpJi4ycOXmiGhf067IlMTsB5T4Tg&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Kayal</h4>
                </Link>
                <p className="reting">Rating:8.7</p>
            </div>
        </div>
    </div>
    </div>
    <div className='container1'>
    <div classname="movie">
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAKiBVf9XoTXISS7hcKJUbU_ee-wgYph7qw&usqp=CAU' alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">The Good Boss</h4>
                </Link>
                <p className="reting">Rating:8.7</p>
            </div>
        </div>
    </div> <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngCiHnhYxIsg4PNC2apJpKxZsfJsCt5XNGw&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Ip Man</h4>
                </Link>
                <p className="reting">Rating:8.7</p>
            </div>
        </div>
    </div> <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDkpjBzRt54DMOVU6JIgG4am8n5TEW1Z5KQ&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Spy timel</h4>
                </Link>
                <p className="reting">Rating:8.7</p>
            </div>
        </div>
    </div>
    </div>
<Link to='/hotstar'className=" star" >Hotstar</Link>
<Link to='/amazon' className=" star">Amazon</Link>
<Link to='/mx' className=" star">Mxplayer</Link>

    </>
  )
}

export default Zee5;
