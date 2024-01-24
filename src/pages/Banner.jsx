import React from 'react'

import handCraft from "../images/Handcrafted Artistry.png"
const Banner = () => {
    return (
        <div className='container-fluid'>
            <img src={handCraft} alt="handcraft" className='img-fluid' height="100%" width="100%" />
            {/* <div className='text-center my-5'>
                <button className='btn btn-primary px-5 py-2'>Create Template</button>
            </div> */}
            <div className='row'>
                <div className='col-sm-11 mx-auto'>
                    <div className='row mx-auto'>
                        <div className='col-sm-9 mx-auto'>
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <div class="container-fluid">
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item mx-5">
                                                <a class="nav-link active" aria-current="page" href="#"><b>All templates</b></a>
                                            </li>
                                            <li class="nav-item mx-5">
                                                <a class="nav-link" href="#"><b>Simple</b></a>
                                            </li>
                                            <li class="nav-item mx-5">
                                                <a class="nav-link" href="#"><b>Modern</b></a>
                                            </li>
                                            <li class="nav-item mx-5">
                                                <a class="nav-link" href="#"><b>Creative</b></a>
                                            </li>
                                            <li class="nav-item mx-5">
                                                <a class="nav-link" href="#"><b>Professional</b></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
