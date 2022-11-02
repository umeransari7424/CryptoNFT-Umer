import React from 'react'

function Collection() {
  return (
    <div className='collection'>
        <div className="container-fluid px-4 py-3">

            <div className="row py-3">
                <h4>Top Collections</h4>
            </div>
            <div className="row">
                <div className="col  ">
                <div class="card  " >
                    <div className='card1' style={{height:"230px"}}>
                        <div className='art'>
                            <img className='img-fluid artimg' src="Assets/a.png" alt="cardimg" /> 
                            <h5>Art Block</h5>
                            <img src="Assets/t.svg" alt="tick" />

                        </div>
                    
                    </div>
                </div>
                </div>
                <div className="col ">
                <div class="card " >
                    <div className='card2' style={{height:"230px"}}>
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/b.png" alt="cardimg" /> 
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />

                        </div>
                    </div>
                </div>
                </div>
                <div className="col ">
                    <div className="card">
                    <div className='card3' style={{height:"230px"}}>
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/c.png" alt="cardimg" /> 
                            <h5 className='mt-2'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />

                        </div>
                    </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card">
                    <div className='card2' style={{height:"230px"}}></div>
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/d.png" alt="cardimg" /> 
                            <h5 className='mt-2'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className='card1' style={{height:"230px"}}></div>
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/e.png" alt="cardimg" /> 
                            <h5 className='mt-2'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection