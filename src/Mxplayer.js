import React from "react";
import {Link} from 'react-router-dom'
const Mxplayer=()=>{
    return(
        <>
        <div className="container">
        <div classname="movie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRek1UTw-J-1tvyfnbFidXhOiLxWbnRuYVwow&usqp=CAU" alt="poster"></img>
            <div className="movie details">
                <div classname="box">
                    <Link to ="/Mxplayer1">
                    <h4 className="title">Namma Veettu Pillai</h4>
                    </Link>
                    <p className="reting">Rating:9
                </p>
                </div>
            </div>
        </div>
        <div classname="movie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB2pi71un-zvywGRuWEJtVIyBxIYlfmmq_w&usqp=CAU" alt="poster"></img>
            <div className="movie details">
                <div classname="box">
                <Link to ="/Mxplayer1">
                    <h4 className="title">Irumbu Thirai</h4>
                    </Link>
                    <p className="reting">Rating:9.5</p>
                </div>
            </div>
        </div>
        <div classname="movie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsygAwYpDC6Tl4HjQkD7SRVsASV1PLgYqu4Q&usqp=CAU" alt="poster"></img>
            <div className="movie details">
                <div classname="box">
                <Link to ="/Mxplayer1">
                    <h4 className="title">IDhuruvangal Pathinaar</h4>
                    </Link>
                    <p className="reting">Rating:9.7</p>
                </div>
            </div>
        </div>
        <div classname="movie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJOXRgRf3NWIXVT8-KdMccxsEEziPh8edMA&usqp=CAU" alt="poster"></img>
            <div className="movie details">
                <div classname="box">
                <Link to ="/Mxplayer1">
                    <h4 className="title">Solo</h4>
                    </Link>
                    <p className="reting">Rating:9.2</p>
                </div>
                
            </div>
        </div>
        </div>
        <div className="container1">
        <div classname="movie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyq0OOZIir0UYg4vIZfKqPCR59smBimdtExQ&usqp=CAU" alt="poster"></img>
            <div className="movie details">
                <div classname="box">
                <Link to ="/Mxplayer1">
                    <h4 className="title">The Nun</h4>
                    </Link>
                    <p className="reting">Rating:9.7</p>
                </div>
            </div>
            </div>
            <div classname="movie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcag9_HaPaZKh8MaKpl65rTcDPMDZpC0hBg&usqp=CAU" alt="poster"></img>
            <div className="movie details">
                <div classname="box">
                <Link to ="/Mxplayer1">
                    <h4 className="title">Sethupathi</h4>
                    </Link>
                    <p className="reting">Rating:9.7</p>
                </div>
            </div>
            </div>
            
            <div classname="movie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOZERrLHM5HxTyPaFhSDSD_UBce2GiuC30A&usqp=CAU" alt="poster"></img>
            <div className="movie details">
                <div classname="box">
                <Link to ="/Mxplayer1">
                    <h4 className="title">Vikram Vedha</h4>
                    </Link>
                    <p className="reting">Rating:9.7</p>
                </div>
            </div>
            </div>
            <div classname="movie">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyw3eK4l56q6kaZrkNVvoM3XVDfwkO6Zba_Q&usqp=CAU" alt="poster"></img>
            <div className="movie details">
                <div classname="box">
                <Link to ="/Mxplayer1">
                    <h4 className="title">Miruthan</h4>
                    </Link>
                    <p className="reting">Rating:9.7</p>
                </div>
            </div>
            </div>
            </div>
            <Link to='/hotstar'className="button star" >Hotstar</Link>
<Link to='/amazon' className=" star">Amazon</Link>
<Link to='/zee' className=" star">Zee5</Link>
        </>
    )
}
export default Mxplayer;

