import React from 'react';
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Collection() {
  return (
    <div className='collection'>
        <div className="container-fluid  py-3">
            <div className="row py-3">
                <h4>Top Collections</h4>
            </div>
            
            <div className="row">
                
                <div className="col">
                <div class="card " style={{height:"230px"}} >
                    <img src="Assets/n.png" alt="original" className='img-fluid geeks' />
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/a.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;

                        </div>
                    
                </div> 
                </div>
                <div className="col ">
                <div class="card " style={{height:"230px"}} >
                    <img src="Assets/original.png" alt="original" className='img-fluid geeks' />
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/b.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;

                        </div>
                    
                </div>
                </div>
                <div className="col ">
                <div class="card " style={{height:"230px"}} >
                    <img src="Assets/qwer.png" alt="original" className='img-fluid geeks ' />
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/c.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-2'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;

                        </div>
                    
                </div>
                </div>
                <div className="col ">
                <div class="card " style={{height:"230px"}} >
                    <img src="Assets/original.png" alt="original" className='img-fluid geeks' />
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/d.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-2'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;

                        </div>
                    
                </div>
                </div>
                <div className="col">
                <div class="card " style={{height:"230px"}} >
                    <img src="Assets/n.png" alt="original" className='img-fluid geeks' />
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/e.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-2'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;

                        </div>
                    
                </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Collection