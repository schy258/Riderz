import React from 'react'
import gridimgOne from '../assets/img/gridimg1-1.jpg'
import gridimgOneTwo from '../assets/img/gridrightnew1.jpeg'
import gridimgright2 from '../assets/img/gridright2new.jpeg'



import NewRowtwo from './NewRowtwo'
import SingleImage from './SingleImage'
import SecondLastSec from './SecondLastSec'
import Footersec from './Footersec'
import Carousel from 'react-multi-carousel'
const FirstRow = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="bg-dark py-5">
                <div className='bg-dark container'>

                    <div style={{display:"flex",justifyContent:"center"}}>
                        <h2 style={{color:"red",fontWeight:"bolder",width:"35%",textAlign:"center"}}>
                        Lorem Ipsum is Placeholder Text Commonly Used
                        </h2>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6" style={{ padding: "3rem" }}>
                                <Carousel responsive={responsive}
                                    infinite={true}
                                >
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ height: "750px", overflow: "hidden", borderRadius: "1rem" }} className='first-row-firstImg'>
                                            <div>
                                                <picture>
                                                    <source
                                                        media="(max-width: 767px)"
                                                        srcSet={gridimgOne}
                                                        class="img img-fluid"

                                                        alt="img1"
                                                    />
                                                    <source
                                                        media="(min-width: 768px)"
                                                        srcSet={gridimgOne}
                                                        class="img img-fluid"
                                                        alt="img1"
                                                    />

                                                    <img
                                                        src={gridimgOne}
                                                        class="img img-fluid"
                                                        alt="My Image"
                                                    />
                                                </picture>
                                            </div>
                                            <div className='d-flex justify-content-center' style={{ position: 'absolute', bottom: "50px" }}>
                                                <h4 className='text-white w-75  fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo.</h4>
                                            </div>
                                        </div>

                                    </div>
                                   
                                    
                                </Carousel>
                                {/* <div style={{ height: "750px", border: "3px solid white", overflow: "hidden", borderRadius: "1rem" }}>
                                    <picture>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={gridimgOne}
                                            class="img img-fluid"

                                            alt="img1"
                                        />
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet={gridimgOne}
                                            class="img img-fluid"
                                            alt="img1"
                                        />

                                        <img
                                            src={gridimgOne}
                                            class="img img-fluid"
                                            alt="My Image"
                                        />
                                    </picture>
                                </div> */}


                            </div>
                            <div className="col-md-6" style={{ paddingTop: "2.5rem" }}>
                                <div className="row py-3">
                                    <div className="col-md-12" style={{ paddingInline: "4rem" }}>
                                    <Carousel responsive={responsive}
                                    infinite={true}
                                >
                                    <div style={{position:"relative"}}>
                                    <div style={{ height: "350px", overflow: "hidden", borderRadius: "1rem" }} className='first-row-firstImg'><picture>
                                            <source
                                                media="(max-width: 767px)"
                                                srcSet={gridimgOneTwo}
                                                class="img img-fluid"

                                                alt="img1"
                                            />
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet={gridimgOneTwo}
                                                class="img img-fluid"
                                                alt="img1"
                                            />

                                            <img
                                                src={gridimgOneTwo}
                                                class="img img-fluid"
                                                alt="My Image"

                                            />
                                        </picture></div>
                                        <div className='d-flex justify-content-center' style={{ position: 'absolute', bottom: "50px" }}>
                                                <h4 className='text-white w-75  fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo.</h4>
                                            </div>
                                    </div>
                                 
                                        
                                        
                                </Carousel>
                                        
                                    </div>
                                </div>
                                <div className="row py-3">
                                    <div className="col-md-12" style={{ paddingInline: "4rem" }}>
                                    <Carousel responsive={responsive}
                                    infinite={true}
                                >
                                    <div style={{position:"relative"}}>
                                    <div style={{ height: "350px",  overflow: "hidden", borderRadius: "1rem" }} className='first-row-firstImg'><picture>
                                            <source
                                                media="(max-width: 767px)"
                                                srcSet={gridimgright2}
                                                class="img img-fluid"

                                                alt="img1"
                                            />
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet={gridimgright2}
                                                class="img img-fluid"
                                                alt="img1"
                                            />

                                            <img
                                                src={gridimgright2}
                                                class="img img-fluid"
                                                alt="My Image"
                                            />
                                        </picture></div>
                                        <div className='d-flex justify-content-center' style={{ position: 'absolute', bottom: "50px" }}>
                                                <h4 className='text-white w-75  fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo.</h4>
                                            </div>
                                    </div>
                                  
                                </Carousel>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <NewRowtwo />
                <SingleImage />
                <SecondLastSec />
            </div>
            <Footersec />
        </>
    )
}

export default FirstRow