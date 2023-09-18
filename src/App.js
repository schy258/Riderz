import React from 'react'
import ridezlogo from '../src/assets/img/ridezlogo.jpeg'
import firstBanner from '../src/assets/img/firstbanner.jpg'
import gridimgOne from '../src/assets/img/gridimg1-1.jpg'
// import gridimgOne from '../src/assets/img/gridleft1.jpeg'
import gridimgOneTwo from '../src/assets/img/gridimg1-2.jpg'
//  import gridimgOneTwo from '../src/assets/img/gridright1.jpeg'

import gridimgOneThree from '../src/assets/img/gridimg1-3.jpg'
import gridimgTwoOne from '../src/assets/img/gridimg2-1.jpg'
import gridimgTwoTwo from '../src/assets/img/gridimg2-2.jpg'
import gridimgThree from '../src/assets/img/gridimg3.jpg'
import FirstRow from './Components/FirstRow'
import SecondLastSec from './Components/SecondLastSec'

const App = () => {
  return (
    <>

      {/* Top row starts */}

      <div class="container-fluid bg-dark me-4">


        <div class="d-flex justify-content-end pe-4">
          <a class="nav-link top-row-link px-2" href="#">Log In &nbsp;&nbsp;| </a>
          <a class="nav-link top-row-link px-2" href="#">Shop </a>
        </div>

      </div>
      {/* Top row end */}

      {/* Nav starts */}
      <div class="bg-black">

        <nav class="container navbar navbar-expand-lg bg-black  " style={{ position: "relative", zIndex: "5" }}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={ridezlogo} alt="Ridez Logo" width="100" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse text-right navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">

                <li>
                  <a href="#" class="nav-link">
                    Ridez story
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ridez Users
                  </a>
                  <ul class="dropdown-menu">

                    <li><a class="dropdown-item text-dark" href="#">Action</a></li>
                    <li><a class="dropdown-item text-dark" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item text-dark" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ridez Products
                  </a>
                  <ul class="dropdown-menu">

                    <li><a class="dropdown-item text-dark" href="#">Action</a></li>
                    <li><a class="dropdown-item text-dark" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item text-dark" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="nav-link">
                    Ridez story
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </nav>

      </div>
      {/* Nav ends */}

      {/* top banner sec starts*/}
      <div>
        <div class="firstbanner">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={firstBanner}
              class="img-fluid"
              alt="img1"
            />
            <source
              media="(min-width: 768px)"
              srcSet={firstBanner}
              class="img-fluid"
              alt="img1"
            />

            <img
              src={firstBanner}
              class="img-fluid"
              alt="My Image"
            />
          </picture>
        </div>
        <div class="banner-text">
          <h1 >Lorem Ipsum is Placeholder Text Commonly Used </h1>
          <a class="nav-link top-row-link text-center" href="#">Learn More <svg width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          </a>
        </div>
      </div>

      <FirstRow />





    </>
  )
}

export default App