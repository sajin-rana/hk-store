import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    
  return (
   <>
     <div 
        className= {`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
            <Link to="/product/:id" className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent' >
                        <img src='../images/wish.svg' alt='wishlist' />
                    </button>
                </div>
                <div className='product-image'>
                    <img src="../images/watch.jpg"  className='img-fluid' alt='product images' />
                    <img src="../images/watch-1.avif"  className='img-fluid'  alt='product images' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Smart Watch</h6>
                    <h5 className='product-title'>Honor T17.0 4 GB RAM 8GM R0M</h5>
                    <ReactStars
                        count={5}
                        value={5}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className= {`description ${grid=== 12 ? "d-block" : "d-none"}`} >
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form
                    </p>
                    <p className='price'>$300.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent' >
                            <img src='../images/prodcompare.svg' alt='compare' />
                        </button>
                        <button className='border-0 bg-transparent' >
                            <img src='../images/view.svg' alt='view' />
                        </button>
                        <button className='border-0 bg-transparent' >
                            <img src='../images/add-cart.svg' alt='addcart' />
                        </button>

                    </div>
                </div>
        </Link>
    </div>
    <div 
        className= {`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
            <Link to="/product/:id" className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent' >
                        <img src='../images/wish.svg' alt='wishlist' />
                    </button>
                </div>
                <div className='product-image'>
                    <img src="../images/watch.jpg"  className='img-fluid' alt='product images' />
                    <img src="../images/watch-1.avif"  className='img-fluid'  alt='product images' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havells</h6>
                    <h5 className='product-title'>Honor T17.0 4 GB RAM 8GM R0M</h5>
                    <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className= {`description ${grid=== 12 ? "d-block" : "d-none"}`} >
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent' >
                            <img src='../images/prodcompare.svg' alt='compare' />
                        </button>
                        <button className='border-0 bg-transparent' >
                            <img src='../images/view.svg' alt='view' />
                        </button>
                        <button className='border-0 bg-transparent' >
                            <img src='../images/add-cart.svg' alt='addcart' />
                        </button>

                    </div>
                </div>
        </Link>
    </div>
   </>
    
  )
}

export default ProductCard