import React from 'react'
import {useLocation} from 'react-router-dom';
import { AiFillCaretLeft, AiOutlineHeart } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
function Marketplace() {
    const {state} = useLocation();
    return (
      <div className="cronos">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <div>
                <img src={state.img} className="img-fluid" alt="A1" />
              </div>
              <br />
              <div className="card py-3 px-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mt-1 pt-1">View Crypto.org Chain details</h6>
                  </div>
                  <div>
                    <img src="Assets/arrow.svg" alt="Arrow" />
                  </div>
                </div>
              </div>
              <br />
              <div className="card py-3 px-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mt-1 pt-1">View Cronoscan details</h6>
                  </div>
                  <div>
                    <img src="Assets/arrow.svg" alt="Arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="back">
                <Link to="/">
                  {" "}
                  <AiFillCaretLeft /> Back
                </Link>
              </div>
              <br />
              <div className="d-flex justify-content-between">
                <div>
                  <AiOutlineHeart size={"35px"} /> &nbsp; <apan>1</apan> &nbsp;
                  &nbsp;
                  <BsEyeFill size={"35px"} /> &nbsp; <apan>178</apan> &nbsp;
                  &nbsp;
                  <IoMdShareAlt size={"35px"} /> &nbsp; <apan>178</apan>
                </div>
                <div>
                  <BiDotsHorizontalRounded />
                </div>
              </div>
              <br />
              <div>
                <span>Chain :</span> &nbsp;<b>Cronos</b>{" "}
                <img src="Assets/copy.svg" alt="copyright" />
              </div> <br />
              <div className='d-flex'> 
               <div className="card" style={{border:"none"}}>
                <div className='d-flex'>
                  <div>
                  <img src="Assets/image1.png" alt="imag" />
                  </div> &nbsp; &nbsp;
                  <div>

                  <span>Creater</span>
                  <div >
                      <code style={{color:"black"}}>0x4584651613..
                      0x4584...43EF</code> &nbsp;
                      <img src="Assets/copy1.svg" alt="" width={"25px"} />
                    </div>
                  </div>
                </div>

               </div> &nbsp; &nbsp;
               <div className="card" style={{border:"none"}}>
          
                <div className='d-flex'>
                  <div>
                  <img src="Assets/a22.gif" className='img-fluid' style={{width:"40px",borderRadius:"50%"}} alt="imag" />
                  </div> &nbsp; &nbsp;
                  <div>

                  <span>Creater</span>
                    <div >
                     {state.name}
                    </div>
                  </div>
            

               </div>

               </div>
              </div>
              <br />
              <div>
                <h2>{state.name}</h2>
              </div>
              <div className="d-flex">
                <div>
                  <span>STARTING BID</span> <br />
                  <h1>
                    <span className="dollar">$</span> 21
                  </h1>
                </div>{" "}
                &nbsp; &nbsp; &nbsp;
                <div className="vl"></div>
                &nbsp; &nbsp; &nbsp;
  
                <div>
                  <span>AUCTION ENDS IN</span> <br />
                  <h1>
                    0<span className="dollar">d</span>0
                    <span className="dollar">h</span>
                    33
                    <span className="dollar">m</span>
                    56
                    <span className="dollar">s</span>
                  </h1>
                </div>
              </div>
              <div>
                <p>
                  Celebrate Cronos World Tour ! This is a commemorative NFT.
                  Collectible created in September 2022 on Cronos mainnet during
                  the Messari Mainnet conference.
                </p>
              </div>
              <div>
                <button type="button" class="btn btn-outline-info">
                  Art
                </button>{" "}
                &nbsp;{" "}
                <button type="button" class="btn btn-outline-info">
                  Cross Chain
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">

            <div className="card p-3 d-flex justify-content-between cardbottom ">
              <div className='cardbottom1'>

              
              <img src={state.img} className ="img-fluid" width={"100px"} alt="" />
               &nbsp; &nbsp;
             
              <h3 className='name text-start'>{state.name}</h3>
              </div>
              
              <div className='buybutton'>
              <button type="button" className="btn btn-primary btn2"><b>Buy For ${state.price}</b></button> &nbsp;
              <button type="button" className="btn btn-primary btn1">Make an Offer</button>
              </div>
             
              

            </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Marketplace;