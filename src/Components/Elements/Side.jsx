import React  from "react";

// import Sideb from "../Utils/Sideb";
import { useNavigate} from "react-router-dom";
import data from '../Utils/crypto_data.json'
function Side() {
  const navigate = useNavigate();
  
  return (
    <div className="sidebar ">
      <div className="container-fluid ">
        
        <div className="row d-flex ">
          
          
          {data.map(item => (
            <div className="col-md-4 col-12 py-2" onClick={()=>navigate('/marketplace',{state:item})}>         
            <div className="card maincard" style={{ width: "300px" ,minHeight:"520px"}}>
              
              <img src={item.img} className="img-fluid mainimg" alt="a1" />
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
                  <h6>{item.name}</h6>
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
                    $ {item.price}
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
          ) )}
      </div>
      </div>
    </div>
  );
}

export default Side;
