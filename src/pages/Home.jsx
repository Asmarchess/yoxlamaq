import React from 'react'
import { IoIosArchive } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

function Home() {
    return (
        <div className='menu'>
            <div className="container">
                <nav className='navbar'>
                    <div className="Navbar__logo"> Aranoz</div>
                    <ul className='navbar__elements'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <div className='icons'>
                        <IoIosArchive />
                        <CiSearch />
                        <CiHeart />
                    </div>
                </nav>
                <div className='qutu'>
                    <div className='text'>
                        <h1>
                            Cloth & Wood Sofa
                        </h1>
                        <p className='tag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae aspernatur aut asperiores vero quisquam doloremque.
                        </p>
                        <button className='button'>BUY NOW</button>
                    </div>
                    <img className='image' src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" alt="" />
                </div>
            </div>
            <div className="esasitem">
                <div className='container'>
                    <div className="item">
                        <div>
                            <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" alt="" />
                        </div>
                        <div className='item2'>
                            <h1>
                                Weekly Sale on 60% Off All Products
                            </h1>
                            <div className='timer'>
                                <div>
                                    <span>Days</span>
                                    -1701</div>
                                <div>
                                    <span>Hours</span>
                                    22</div>
                                <div>
                                    <span>Minutes</span>
                                    43</div>
                                <div>
                                    <span>Seconds</span>
                                    47</div>
                            </div>
                            <div></div>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    )
}

export default Home