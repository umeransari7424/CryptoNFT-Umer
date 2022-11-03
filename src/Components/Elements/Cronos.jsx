import React from 'react'
import { AiFillCaretLeft , AiOutlineHeart} from 'react-icons/ai'
import {BsEyeFill} from 'react-icons/bs'
import {IoMdShareAlt} from 'react-icons/io'
import {BiDotsHorizontalRounded} from 'react-icons/bi';


function Cronos() {
  return (
    <div className='cronos'>
        <div className='contianer py-5'>
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-3">
                    <div>

                    <img src="Assets/a1.gif" className='img-fluid' alt="A1" />
                    </div>
                    <br />
                <div className="card py-3 px-3">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6 className='mt-1 pt-1'>View Crypto.org Chain details</h6>
                        </div>
                        <div>
                            <img src="Assets/arrow.svg" alt="Arrow" />
                        </div>

                    </div>
                </div>
                <br />
                <div className="card py-3 px-3">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6 className='mt-1 pt-1'>View Cronoscan details</h6>
                        </div>
                        <div>
                            <img src="Assets/arrow.svg" alt="Arrow" />
                        </div>

                    </div>
                </div>

                </div> 
                <div className="col-md-5">
                    <div className='back'>
                    <a href="/"> <AiFillCaretLeft/> Back</a>
                    </div><br />
                    <div className='d-flex justify-content-between'> 
                    <div>
                        <AiOutlineHeart size={"35px"}/> &nbsp; <apan>1</apan> &nbsp; &nbsp;
                        <BsEyeFill size={"35px"}/> &nbsp; <apan>178</apan> &nbsp; &nbsp;
                        <IoMdShareAlt size={"35px"}/> &nbsp; <apan>178</apan>
                    </div>
                    <div>
                        <BiDotsHorizontalRounded/>
                    </div>
                    </div>
                     <br />

                    <div>
                        <span>Chain :</span> &nbsp;<b>Cronos</b> <img src="Assets/copy.svg" alt="copyright" />
                    </div>
                    <br />
                    <div>

                    <h2>
                    Cronos World Tour at Messari Mainnet 2022
                    </h2>
                    </div> <br />
                    <div>

                    <p>
                    Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Messari Mainnet conference.
                    </p>

                    </div>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Cronos