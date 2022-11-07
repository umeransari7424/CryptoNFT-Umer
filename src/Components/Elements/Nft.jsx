import React from "react";
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// // import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Nft() {
  return (
    <div className="collection">
      <div className="container-fluid text-center py-3">
        <div className="row py-3 text-start">
          <h3>
            Top Collections
            {/* <button type="button" class="btn btn-primary">Primary</button> */}
          </h3>
        </div>
        <div className="row py-3">
          <Carousel
          responsive={responsive}
            // autoPlay="false"
            // interval={2000}
           infinite={true}
            rewind={true}
            // axis="horizontal"
            // labels={false}
            // arrows={false}
            // showStatus={false}
            // showIndicators={false}
            // showThumbs={false} 
            >
             <div class="card " style={{width:"240px" , height:"230px"}} >
                    <img src="Assets/n.png" alt="original" className='img-fluid geeks' />
                    <div className='art m-2'>
                            <img className='img-fluid artimg' src="Assets/a.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;
                        </div>                   
                </div> 
                <div class="card " style={{width:"240px",height:"230px"}} >
                    <img src="Assets/original.png" alt="original" className='img-fluid geeks' />
                    <div className='art'>
                            <img className='img-fluid artimg' src="Assets/b.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;

                        </div>
                    
                </div> 
              <div class="card " style={{width:"240px",height:"230px"}} >
                    <img src="Assets/qwer.png" alt="original" className='img-fluid geeks' />
                    <div className='art m-2'>
                            <img className='img-fluid artimg' src="Assets/a.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;
                        </div>                    
                </div> 
              <div class="card " style={{width:"240px",height:"230px"}} >
                    <img src="Assets/original.png" alt="original" className='img-fluid geeks' />
                    <div className='art m-2'>
                            <img className='img-fluid artimg' src="Assets/b.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;

                        </div>                   
                </div> 
                <div class="card " style={{width:"240px" , height:"230px"}} >
                    <img src="Assets/n.png" alt="original" className='img-fluid geeks' />
                    <div className='art m-2'>
                            <img className='img-fluid artimg' src="Assets/a.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;
                        </div>                   
                </div>  
                <div class="card " style={{width:"240px",height:"230px"}} >
                    <img src="Assets/original.png" alt="original" className='img-fluid geeks' />
                    <div className='art m-2'>
                            <img className='img-fluid artimg' src="Assets/b.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;

                        </div>                  
                </div> 
                <div class="card " style={{width:"240px",height:"230px"}} >
                    <img src="Assets/original.png" alt="original" className='img-fluid geeks' />
                    <div className='art m-2'>
                            <img className='img-fluid artimg' src="Assets/a.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;
                        </div>
                </div> 
                <div class="card " style={{width:"240px",height:"230px"}} >
                    <img src="Assets/original.png" alt="original" className='img-fluid geeks' />
                    <div className='art m-2'>
                            <img className='img-fluid artimg' src="Assets/a.png" alt="cardimg" /> &nbsp;
                            <h5 className='mt-1'>Art Block</h5>&nbsp;
                            <img src="Assets/t.svg" alt="tick" />&nbsp;
                        </div>
                </div> 
            </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Nft;
