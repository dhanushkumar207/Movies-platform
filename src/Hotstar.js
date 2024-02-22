import React from 'react'
import {Link} from 'react-router-dom';
const Hotstar = () => {
  return (
    <>
     <div className='container'>
      
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NW-vLanBtH9KFNn_7PYxXUeqvIN9wBmnRg&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title"> Vikram</h4> </Link>
                <p className="reting">Rating:9</p>
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89wj3BY_04UWKTZf25PeaTmLlwGPe35syzA&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Bahubali 2</h4> </Link>
                <p className="reting">Rating:8.5</p>
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYKN_IWLt6kKbZLFdX8_3ORF-y4b76Y6W2w&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Maari 2</h4> </Link>
                <p className="reting">Rating:8</p>
               
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOf14X0bxJdXRSh4efv1snmtVnaR96MUJoJg&usqp=CAU" alt="poster"></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Avengers</h4> </Link>
                <p className="reting">Rating:8.4</p>
               
            </div>
        </div>
    </div>
    </div>
    <div className='container1'>
       
    <div classname="movie">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELLXGN0qns8S9WUZu_XhQkLKzhc_XIxu66A&usqp=CAU' alt='poster'></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Chhichuchore</h4> </Link>
                <p className="reting">Rating:8.4</p>
               
            </div>
        </div>
    </div>  <div classname="movie">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEgSWpSZfcHuAuv9oVf-cZhlXkY6awJ1Xgw&usqp=CAU' alt='poster'></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Bhuj</h4> </Link>
                <p className="reting">Rating:8.4</p>
               
            </div>
        </div>
    </div>  
    <div classname="movie">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I0OHBo-uHKFrQokfW0ZZ33W4GyxHoeAbTA&usqp=CAU' alt='poster'></img>
        <div className="movie details">
             <div classname="box">
             <Link to ="/Mxplayer1">
                <h4 className="title">Sanak</h4> </Link>
                <p className="reting">Rating:8.4</p>
               
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSr1LOZ5jVmDXRad3Ky15y4k3mgwU8P3DKQ&usqp=CAU' alt='poster'></img>
        <div className="movie details"> 
        <div classname="box">
        <Link to ="/Mxplayer1">
                <h4 className="title">Jersey</h4> </Link>
                <p className="reting">Rating:8.4</p>
               
    </div>
            </div>
        </div>
    </div>

    <div className='container'>
    <div classname="movie">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoocOZxcxN43w_6RSEGkv1VwFPlsy9L7b9Nw&usqp=CAU' alt='poster'></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">M.S.Dhoni</h4> </Link>
                <p className="reting">Rating:8.4</p>
               
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_GqKMzcAUZZu1bKChypYEgE62pBo5wAJCw&usqp=CAU' alt='poster'></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">Tik Tik Tik</h4>
                </Link>
                <p className="reting">Rating:8.4</p>
               
            </div>
        </div>
    </div>
    <div classname="movie">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbyfQ1bP2FLITUNoEwSrRJFCUMFtugHpe7Q&usqp=CAU' alt='poster'></img>
        <div className="movie details">
            <div classname="box">
            <Link to ="/Mxplayer1">
                <h4 className="title">24</h4>
                </Link>
                <p className="reting">Rating:8.4</p>
              
            </div>
        </div>
    </div>
    </div>
    <Link to='/amazon'className=" star" >Amazon</Link>
    <Link to='/zee' className=" star">Zee5</Link>
<Link to='/mx'className=" star" >Mxplayer</Link>
    </>
  )
}

export default Hotstar;