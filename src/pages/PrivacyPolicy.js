import React from 'react'
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"

const PrivacyPolicy = () => {
  return (
    <>
        <Meta title="Privacy Policy" />
        <BreadCrumb title="Privacy Policy" />
        <section className='policy-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'>
                            <h2 className=''>What is Lorem Ipsum?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PrivacyPolicy