import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sideb from "../Utils/Sideb";
import {Link} from "react-router-dom";
function Side() {
  return (
    <div className="sidebar py-5">
      <div className="container-fluid ">
        <div className="row py-4 ">
          <h2 style={{color:"white"}}>Explore</h2>
        </div>
        <div className="row d-flex ">
          <div className="col-md-3 py-2 sidebarcolomn">
            <ProSidebarProvider>
              <Sideb />
            </ProSidebarProvider>
          </div>
          <div className="col-md-3 col-12 py-2">         
                <div className="card maincard" style={{ width: "300px" }}>
                  <Link to="/cronos">
                  <img src="Assets/a1.gif" className="img-fluid mainimg" alt="a1" /></Link>
                  <div class="card-body">
                    <div className="d-flex sidecards">
                      <img
                        className="img-fluid artimg"
                        style={{radius:"50%"}}
                        src="Assets/a11.png"
                        alt="cardimg"
                      /> &nbsp;
                   <span className="mt-2">Art Block</span>&nbsp; &nbsp;
                      <img src="Assets/t.svg" className="tickmark" alt="tick" />
                      &nbsp;
                    </div> <br />
                    <div className="cronos">
                      <h6>Cronos World Tour at Messari Mannet 2022</h6>
                    </div>
                    <div>
                      <span>1 minted</span>
                    <div className="d-flex" >
                    <div className="card d-flex justify-content-between py-1 px-2 "  style={{width:"200px"}}>
                      
                      <div className="d-flex justify-content-between">
                        <div>
                        Current bid
                        </div>
                        <div>
                        $ 11
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                        Ends In
                        </div>
                        <div>
                        3 Hours
                        </div>
                      </div>
                    </div> &nbsp;
                    <div className="card m-auto p-3">
                     <span>Bid</span>
                    </div>
                   
                    </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="col-md-3 col-12 py-2">
          <div className="card maincard" style={{ width: "300px" }}>
                  <img src="Assets/a2.gif" className="img-fluid mainimg" alt="a1" />
                  <div class="card-body">
                    <div className="d-flex sidecards">
                      <img
                        className="img-fluid artimg"
                        style={{radius:"50%"}}
                        src="Assets/a11.png"
                        alt="cardimg"
                      /> &nbsp;
                      
                   <span className="mt-2">Art Block</span>&nbsp; &nbsp;
                      <img src="Assets/t.svg" className="tickmark" alt="tick" />
                      &nbsp;
                    </div> <br />
                    <div className="cronos">
                      <h6>Cronos World Tour at Messari Mannet 2022</h6>
                    </div>
                    <div>
                      <span>1 minted</span>
                    <div className="d-flex" >
                    <div className="card d-flex justify-content-between py-1 px-2 "  style={{width:"200px"}}>
                      
                      <div className="d-flex justify-content-between">
                        <div>
                        Current bid
                        </div>
                        <div>
                        $ 11
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                        Ends In
                        </div>
                        <div>
                        3 Hours
                        </div>
                      </div>
                    </div> &nbsp;
                    <div className="card m-auto p-3">
                     <span>Bid</span>
                    </div>
                   
                    </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="col-md-3 col-12 py-2">
          <div className="card maincard" style={{ width: "300px" }}>
                  <img src="Assets/a3.png" className="img-fluid mainimg" alt="a1" />
                  <div class="card-body">
                    <div className="d-flex sidecards">
                      <img
                        className="img-fluid artimg"
                        style={{radius:"50%"}}
                        src="Assets/a11.png"
                        alt="cardimg"
                      /> &nbsp;
                      
                   <span className="mt-2">Art Block</span>&nbsp; &nbsp;
                      <img src="Assets/t.svg" className="tickmark" alt="tick" />
                      &nbsp;
                    </div> <br />
                    <div className="cronos">
                      <h6>Cronos World Tour at Messari Mannet 2022</h6>
                    </div>
                    <div>
                      <span>1 minted</span>
                    <div className="d-flex" >
                    <div className="card d-flex justify-content-between py-1 px-2 "  style={{width:"200px"}}>
                      
                      <div className="d-flex justify-content-between">
                        <div>
                        Current bid
                        </div>
                        <div>
                        $ 11
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                        Ends In
                        </div>
                        <div>
                        3 Hours
                        </div>
                      </div>
                    </div> &nbsp;
                    <div className="card m-auto p-3">
                     <span>Bid</span>
                    </div>
                   
                    </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div className="row d-flex ">
          <div className="col-md-3 py-2 ">
            
          </div>
          <div className="col-md-3 col-12 py-2">         
                <div className="card maincard" style={{ width: "300px" }}>
                  <img src="Assets/a1.gif" className="img-fluid mainimg" alt="a1" />
                  <div class="card-body">
                    <div className="d-flex sidecards">
                      <img
                        className="img-fluid artimg"
                        style={{radius:"50%"}}
                        src="Assets/a11.png"
                        alt="cardimg"
                      /> &nbsp;
                      
                   <span className="mt-2">Art Block</span>&nbsp; &nbsp;
                      <img src="Assets/t.svg" className="tickmark" alt="tick" />
                      &nbsp;
                    </div> <br />
                    <div className="cronos">
                      <h6>Cronos World Tour at Messari Mannet 2022</h6>
                    </div>
                    <div>
                      <span>1 minted</span>
                    <div className="d-flex" >
                    <div className="card d-flex justify-content-between py-1 px-2 "  style={{width:"200px"}}>
                      
                      <div className="d-flex justify-content-between">
                        <div>
                        Current bid
                        </div>
                        <div>
                        $ 11
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                        Ends In
                        </div>
                        <div>
                        3 Hours
                        </div>
                      </div>
                    </div> &nbsp;
                    <div className="card m-auto p-3">
                     <span>Bid</span>
                    </div>
                   
                    </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="col-md-3 col-12 py-2">
          <div className="card maincard" style={{ width: "300px" }}>
                  <img src="Assets/a2.gif" className="img-fluid mainimg" alt="a1" />
                  <div class="card-body">
                    <div className="d-flex sidecards">
                      <img
                        className="img-fluid artimg"
                        style={{radius:"50%"}}
                        src="Assets/a11.png"
                        alt="cardimg"
                      /> &nbsp;
                      
                   <span className="mt-2">Art Block</span>&nbsp; &nbsp;
                      <img src="Assets/t.svg" className="tickmark" alt="tick" />
                      &nbsp;
                    </div> <br />
                    <div className="cronos">
                      <h6>Cronos World Tour at Messari Mannet 2022</h6>
                    </div>
                    <div>
                      <span>1 minted</span>
                    <div className="d-flex" >
                    <div className="card d-flex justify-content-between py-1 px-2 "  style={{width:"200px"}}>
                      
                      <div className="d-flex justify-content-between">
                        <div>
                        Current bid
                        </div>
                        <div>
                        $ 11
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                        Ends In
                        </div>
                        <div>
                        3 Hours
                        </div>
                      </div>
                    </div> &nbsp;
                    <div className="card m-auto p-3">
                     <span>Bid</span>
                    </div>
                   
                    </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="col-md-3 col-12 py-2">
          <div className="card maincard" style={{ width: "300px" }}>
                  <img src="Assets/a3.png" className="img-fluid mainimg" alt="a1" />
                  <div class="card-body">
                    <div className="d-flex sidecards">
                      <img
                        className="img-fluid artimg"
                        style={{radius:"50%"}}
                        src="Assets/a11.png"
                        alt="cardimg"
                      /> &nbsp;
                      
                   <span className="mt-2">Art Block</span>&nbsp; &nbsp;
                      <img src="Assets/t.svg" className="tickmark" alt="tick" />
                      &nbsp;
                    </div> <br />
                    <div className="cronos">
                      <h6>Cronos World Tour at Messari Mannet 2022</h6>
                    </div>
                    <div>
                      <span>1 minted</span>
                    <div className="d-flex" >
                    <div className="card d-flex justify-content-between py-1 px-2 "  style={{width:"200px"}}>
                      
                      <div className="d-flex justify-content-between">
                        <div>
                        Current bid
                        </div>
                        <div>
                        $ 11
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                        Ends In
                        </div>
                        <div>
                        3 Hours
                        </div>
                      </div>
                    </div> &nbsp;
                    <div className="card m-auto p-3">
                     <span>Bid</span>
                    </div>
                   
                    </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Side;
