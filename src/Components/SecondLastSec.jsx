import React from 'react'

const SecondLastSec = () => {
    return (
        <>
            <div className='bg-black p-5'>
                <div className='py-5'>
                    <h1 className='text-white text-center fw-bolder'>lorem Ipsum is Placeholder text Commonly USed</h1>
                    <p className='text-white text-center'>Lorem Ipsum Placeholder Text Commonly Used</p>
                    <div className='d-flex justify-content-center'>
                        <button className=' text-white' style={{ backgroundColor: " rgb(255, 0, 0)", border: "none", borderRadius: "5px" }}>Know More
                            <svg width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="white-bg-right-arrow-2 ms-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondLastSec