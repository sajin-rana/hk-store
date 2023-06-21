import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5" >
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative '>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between  align-items-center'>
                <div className='small-banner position-relative '>
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or <br /> $64.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band <br /> styles and colors.</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $599.00 or <br/> $49.91/mo for 12 mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & <br /> ultra-low distortion.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
    </Container>
      <Container class1="home-wrapper-2 py-5" >
        <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>12 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>13 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphones' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>13 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/acc.jpg' alt='accessories' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>6 Items</p>
                  </div>
                  <img src='images/homeapp.jpg' alt='home appliances' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>8 Items</p>
                  </div>
                  <img src='images/laptop.jpg' alt='laptop' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>6 Items</p>
                  </div>
                  <img src='images/speaker.jpg' alt='speaker' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
            <ProductCard 
              image="images/headphone01.jpg" 
              image2="images/headphone02.jpg"
              title="Headphones"
              subtitle="Collection Of Headphones Bulk 10 Pack Multi Colored " 
              star="4.5"
              price="$100.00"
            />
            <ProductCard
              image="images/tab.jpg" 
              image2="images/tab1.jpg"
              title="Havells"
              subtitle="Honor T17.0 4 GB RAM 8GM R0M" 
              star="4"
              price="$500.00" />
            <ProductCard 
              image="images/watch.jpg" 
              image2="images/smartwatch.jpg"
              title="Smart Watch"
              subtitle="Collection Of Smart Watch Of Different Brand" 
              star="3"
              price="$400.00"
            />
            <ProductCard 
              image="images/tab2.jpg" 
              image2="images/tab3.jpg"
              title="Havells"
              subtitle="Honor T17.0 4 GB RAM 8GM R0M" 
              star="5"
              price="$500.00"
            />
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
                src='images/famous-1.webp' 
                className='img-fluid'
                alt="famous" />           
              <div className='famous-content position-absolute' >                
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
             </div> 
            </div>
            <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
                src='images/famous-2.webp' 
                className='img-fluid'
                alt="famous" />           
              <div className='famous-content position-absolute' >                
                <h5 className='text-dark' >STUDIO DISPLAY</h5>
                <h6 className='text-dark' >600 nits of brightness.</h6>
                <p className='text-dark' >27-inch 5k Retina display</p>
              </div>
             </div> 
            </div>
            <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
                src='images/famous-3.webp' 
                className='img-fluid'
                alt="famous" />           
              <div className='famous-content position-absolute' >                
                <h5 className='text-dark' >SMARTPHONES</h5>
                <h6 className='text-dark' >Smartphone 13 Pro.</h6>
                <p className='text-dark' >Now in Green From $999.00 or $41.63/mo. for 24mo. Footnote*</p>
              </div>
             </div> 
            </div>
            <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
                src='images/famous-4.webp' 
                className='img-fluid'
                alt="famous" />           
              <div className='famous-content position-absolute' >                
                <h5 className='text-dark' >HOME SPEAKERS</h5>
                <h6 className='text-dark' >Room-filling sound.</h6>
                <p className='text-dark' >From $699 or $116.58/mo for 12 mo*</p>
              </div>
             </div> 
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Product</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>          
          </div>
          <div className='row'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25%'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25%'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25%'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25%'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25%'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25%'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25%'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25%'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
         <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>  
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard 
                image="images/blog-01.jpg" 
                date="11 JUNE 2022" 
                title="A Beautiful Sunday Morning Renaissance"
              />
            </div>
            <div className='col-3'>
              <BlogCard
                image="images/blog-02.jpg"
                date="2 March 2020"
                title="Set Ut Perspiciate Unde Omnis..."                
              />
            </div>
            <div className='col-3'>
              <BlogCard
                image="images/blog-03.jpg"
                date="12 FEB 2021"
                title="Vitae Magnis Fusce Laorest Porttitor.."                
              />
            </div>
            <div className='col-3'>
              <BlogCard
                image="images/blog-04.jpg"
                date="8 JAN 2022"
                title="Uma Pretium Elit Mauris Cursus Curbitu"                
              />
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Home