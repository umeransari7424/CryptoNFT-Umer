import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {FaDiscord , FaTelegramPlane} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className="container-fluid px-5 pt-5">
            <div className='py-3'>

            
                <AiFillInstagram size={"40px"}/> &nbsp; 
                <BsTwitter size={"35px"}/> &nbsp;
                <FaDiscord size={"35px"}/> &nbsp;
                <FaTelegramPlane size={"35px"}/> &nbsp;

            </div>
            <div  className='py-3 d-flex justify-content-between'>
                <div>

                <p>Copyright © 2022 Crypto.com. All rights reserved.</p>
                </div>
                <div className='helpcenter' >
                    <a href="/"> Help Center</a> &nbsp; 
                    <a href="/"> Blog</a>&nbsp; 
                    <a href="/"> T&C</a>&nbsp; 
                    <a href="/"> Privacy Notice</a>&nbsp; 
                    <a href="/"> Cookies</a>&nbsp; 

                </div>
            </div>
           

        </div>
        
    </div>
  )
}

export default Footer