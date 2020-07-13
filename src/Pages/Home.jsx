import React from 'react';
import bgimg from '../images/shoe wall.jpg';
import shoe2 from '../images/shoe 2.jpg';
import greyshoe from '../images/grey.jpg';
import shoe3 from '../images/1.jpg'
import shoe4 from '../images/2.jpg'
import shoe5 from '../images/3.jpg'
import banner from '../images/banner.jpg';
import '../App.css';



const Home = () => {
    return (
        <div>
            <img src={bgimg}  width='100%' alt="shoe" />

            <div className='container'>
                <div className='row'>
                    <div className="col-sm-6 pt-5 col-md-6 col-lg-4">
                        <div className='row'>
                            <div className="card">
                                <img src={shoe2} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Link in Bio</h5>
                                    <p className="card-text">Rs: 1000.00</p>
                                    <a href="product.html" className="btn">Add to cart</a>
                                </div>
                            </div>                          
                        </div>
                    </div>

                    <div className="col-sm-6 pt-5 col-md-6 col-lg-4">
                        <div className='row'>
                            <div className="card">
                                <img src={greyshoe} height='440px' className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Link in Bio</h5>
                                    <p className="card-text">Rs: 1000.00</p>
                                    <a href="product.html" className="btn">Add to cart</a>
                                </div>
                            </div>                          
                        </div>
                    </div>

                    <div className="col-sm-6 pt-5 col-md-6 col-lg-4">
                        <div className='row'>
                            <div className="card">
                                <img src={shoe3} height='440px' className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Link in Bio</h5>
                                    <p className="card-text">Rs: 1000.00</p>
                                    <a href="product.html" className="btn">Add to cart</a>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
            <img src={banner} width='100%' alt="shoe" />

            </div>

            <div className='container'>
                <div className='row'>
                    <div className="col-sm-6 pt-5 col-md-6 col-lg-4">
                        <div className='row'>
                            <div className="card">
                                <img src={shoe4} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Link in Bio</h5>
                                    <p className="card-text">Rs: 1000.00</p>
                                    <a href="product.html" className="btn">Add to cart</a>
                                </div>
                            </div>                          
                        </div>
                    </div>

                    <div className="col-sm-6 pt-5 col-md-6 col-lg-4">
                        <div className='row'>
                            <div className="card">
                                <img src={shoe2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Link in Bio</h5>
                                    <p className="card-text">Rs: 1000.00</p>
                                    <a href="product.html" className="btn">Add to cart</a>
                                </div>
                            </div>                          
                        </div>
                    </div>

                    <div className="col-sm-6 pt-5 col-md-6 col-lg-4">
                        <div className='row'>
                            <div className="card">
                                <img src={shoe5} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Link in Bio</h5>
                                    <p className="card-text">Rs: 1000.00</p>
                                    <a href="product.html" className="btn">Add to cart</a>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Home;