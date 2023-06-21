import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from "../components/Color"
import { TbGitCompare } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"


const SingleProduct = () => {
    const props = {
        width: 400, 
        height: 500, 
        zoomWidth: 500, 
        img: "https://cdn.shopify.com/s/files/1/0630/1037/3854/products/A_1_2048x2048.jpg?v=1666691032"};

    const [orderedProduct, setOrderedProduct] = useState(true)
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
        <Meta title="Product Name" />
        <BreadCrumb title="Product Name" />
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div>
                                <img src='../images/watch.jpg' className='img-fluid' />
                            </div>
                            <div>
                                <img src='../images/watch.jpg' className='img-fluid' />
                            </div>
                            <div>
                                <img src='../images/watch.jpg' className='img-fluid' />
                            </div>
                            <div>
                                <img src='../images/watch.jpg' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>Watch with class for Men</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$ 100</p>
                                <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>(2 Reviews )</p>
                                </div>
                                <a className='review-btn' href='#review'>Write a Review</a>
                            </div>
                            <div className=' py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type : </h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand : </h3>
                                    <p className='product-data'>Havels</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category : </h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags : </h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availiblity : </h3>
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size : </h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color : </h3>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity : </h3>
                                    <div className=''>
                                        <input 
                                            type='number' 
                                            name='' 
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{width: "70px"}} 
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>ADD TO CART</button>
                                        <button className='button signup'>BUY IT NOW</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=''><TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href=''><AiOutlineHeart className='fs-5 me-2' /> Add to WishList</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns : </h3>
                                    <p className='product-data'>
                                        Lorem Ipsum is simply dummy text of the printing<br />
                                        and typesetting industry. Lorem Ipsum has been the industry's <br />
                                         standard dummy text ever since the 1500s</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link : </h3>
                                    <a 
                                        href='javascript:void(0);' 
                                        onClick={() => {                                         
                                        copyToClipboard(
                                            "https://cdn.shopify.com/s/files/1/0630/1037/3854/products/A_1_2048x2048.jpg?v=1666691032"
                                        )
                                        }}
                                        >
                                            Copy Product Link
                                        </a>
                                </div>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
        <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                         
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='reviews-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review' >Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Base on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline'>Write a Review</a>
                                    </div>
                                )}
                            </div>
                            <div className='review-form py-4'>
                            <h4 className='mb-2'>Write a Review</h4>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <ReactStars
                                        count={5}
                                        value={0}
                                        size={24}
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div>
                                    <textarea 
                                        name=''
                                        id=''
                                        className='w-100 form-control'
                                        cols="30"
                                        rows='4'
                                        placeholder='Comments'
                                    ></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button className='button border-0'>Submit Review</button>
                                </div>
                            </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                        <div className='d-flex gap-10  align-items-center'>
                                            <h6 className='mb-0'>Sajin</h6>
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>
                                        Lorem Ipsum is simply dummy text of the 
                                        printing and typesetting industry. Lorem 
                                        Ipsum has been the industry's standard dummy 
                                        text ever since the 1500s, when an unknown
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>You May Also Like</h3>
            </div>          
          </div>
          <div className='row'>
              <ProductCard />
              <ProductCard />
            </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct