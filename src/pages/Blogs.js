import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard"

const Blogs = () => {
  return (
    <>
        <Meta title={"Blogs"} />
        <BreadCrumb title="Blogs" />
        <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Find By Categories</h3>
                            <div>
                                <ul className="ps-0">
                                <li>Watch</li>
                                <li>Tv</li>
                                <li>Camera</li>
                                <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6 mb-3'>
                                <BlogCard 
                                    image="images/blog-01.jpg" 
                                    date="11 JUNE 2022" 
                                    title="A Beautiful Sunday Morning Renaissance"
                                 />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard
                                    image="images/blog-02.jpg"
                                    date="2 March 2020"
                                    title="Set Ut Perspiciate Unde Omnis..."                
                                />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard
                                    image="images/blog-03.jpg"
                                    date="12 FEB 2021"
                                    title="Vitae Magnis Fusce Laorest Porttitor.."                
                                />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard
                                    image="images/blog-04.jpg"
                                    date="8 JAN 2022"
                                    title="Uma Pretium Elit Mauris Cursus Curbitu"                
                                />
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs