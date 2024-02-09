import React from 'react'
//import PropTypes from 'prop-types'

export default function About(props) {

  return (
    <>
      <div className={`container text-${props.mode === 'dark' ? 'white' : 'black'}`}>
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4 mb-4">About Us</h1>
            <p className="lead">Welcome to TextUtils, your ultimate destination for text manipulation! Our platform offers a wide range of features to help you transform your text effortlessly.</p>
            <p>Whether you need to convert text to uppercase, lowercase, or sentence case, clear unnecessary spaces, or copy your text to the clipboard, TextUtils has got you covered.</p>
            <p>Our user-friendly interface and intuitive design make it easy for anyone to use our tools, whether you're a professional writer, student, or casual user.</p>
            <p>Explore TextUtils today and take your text editing experience to the next level!</p>
          </div>
          <div className="col-md-6">
            <img src="/about.png" alt="About Us" className="img-fluid rounded mb-4" style={{ marginTop: '-60px' }} />
          </div>
        </div>
      </div>
    </>
  )
}
