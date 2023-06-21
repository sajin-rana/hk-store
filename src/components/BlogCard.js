import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  return (
 
        <div className='blog-card'>
            <div className='card-image'>
                <img src={props.image} className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>{props.date}</p>
                <h5 className='title'>{props.title}</h5>
                <p className='desc'>You're Only An Good As Your Last Collection. Which Is An Enormous Pressure. I Think There is Something About.....</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>

  )
}

export default BlogCard