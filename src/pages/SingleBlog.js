import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from "react-icons/hi"



const SingleBlog = () => {
  return (
    <>
        <Meta title="Dynamic Blog Name" />
        <BreadCrumb title="Dynamic Blog Name" />
        <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to="/blogs" className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-4' />
                                Go back to Blogs
                            </Link>
                            <h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
                            <img src="../images/blog-01.jpg"className='img-fluid w-100 my-4' alt='blog-1'/>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog