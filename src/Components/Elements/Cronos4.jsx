import React from "react";
import { AiFillCaretLeft, AiOutlineHeart } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

function Cronos4() {
  return (
    <div className="cronos">
      <div className="contianer py-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <div>
              <img src="Assets/a5.png" className="img-fluid" alt="A1" />
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
            </div>
            <br />
            <div>
              <h2>Cronos World Tour at Token2049 Singapore 2022</h2>
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
      </div>
    </div>
  );
}

export default Cronos4;
