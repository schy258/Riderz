import React from 'react'
import secondright from '../assets/img/secondright.jpeg'
import secondleft from '../assets/img/secondleft.jpeg'
import Carousel from 'react-multi-carousel';
const NewRowtwo = () => {
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
            <div className="bg-dark py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 px-5">
                            <Carousel responsive={responsive}
                                infinite={true}
                            >
                                <div style={{ position: 'relative' }}><div style={{ height: "450px",  overflow: "hidden", borderRadius: "1rem" }} className='first-row-firstImg'>
                                    <picture>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={secondright}
                                            class="img img-fluid"

                                            alt="img1"
                                        />
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet={secondright}
                                            class="img img-fluid"
                                            alt="img1"
                                        />

                                        <img
                                            src={secondright}
                                            class="img img-fluid"
                                            alt="My Image"
                                        />
                                    </picture>
                                </div>
                                <div className='d-flex justify-content-center' style={{ position: 'absolute', bottom: "50px" }}>
                                                <h4 className='text-white w-75  fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo.</h4>
                                            </div></div>
                            </Carousel>

                        </div>
                        <div className="col-md-7 px-5 py-2">
                            <Carousel responsive={responsive}
                                infinite={true}
                            >
                                <div style={{position:"relative"}}> <div style={{ height: "450px", overflow: "hidden", }} className='first-row-firstImg'>
                                    <picture>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={secondleft}
                                            class="img img-fluid rounded"

                                            alt="img1"
                                        />
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet={secondleft}
                                            class="img img-fluid rounded"
                                            alt="img1"
                                        />

                                        <img
                                            src={secondleft}
                                            class="img img-fluid "
                                            style={{ borderRadius: "1rem" }}
                                            alt="My Image"
                                        />
                                    </picture>
                                </div> <div className='d-flex justify-content-center' style={{ position: 'absolute', bottom: "50px" }}>
                                                <h4 className='text-white w-75  fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo.</h4>
                                            </div></div>
                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRowtwo