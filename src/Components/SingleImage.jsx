import React from 'react'
import bottomImg from '../assets/img/gridbottom.jpeg'
import Carousel from 'react-multi-carousel';

const SingleImage = () => {
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
            <div className='bg-dark py-5'>
                <div className="container">
                    <div className="row">
                        <Carousel responsive={responsive}
                            infinite={true}
                        >
                            <div className='px-4'>
                                <div style={{ height: "470px", overflow: "hidden",  }} className='first-row-firstImg'>
                                 <div style={{ position: 'relative' }}>
                                 <picture>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={bottomImg}
                                            class="img img-fluid mobbdrRadius"

                                            alt="img1"
                                        />
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet={bottomImg}
                                            class="img img-fluid mobbdrRadius"
                                            alt="img1"
                                        />

                                        <img
                                            src={bottomImg}
                                            class="img img-fluid mobbdrRadius"
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

                    </div>
                </div>
            </div>
        </>)
}

export default SingleImage