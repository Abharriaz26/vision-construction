import React from 'react'

const About = () => {
  return (
    <div className="about-container">
    <div className="about-header">
      <h1>Vision Construction NY Inc.</h1>
      <p>Your trusted partner in high-quality construction services</p>
    </div>
    
    <div className="about-section">
      <h2>Who We Are</h2>
      <p>
        Vision Construction NY Inc. is a premier construction company based in the Bronx, dedicated to providing superior construction services to both residential and commercial clients. With years of experience in the industry, we have built a reputation for reliability, quality, and excellence.
      </p>
    </div>

    <div className="about-section">
      <h2>Our Mission</h2>
      <p>
        Our mission is to deliver exceptional construction solutions that meet the needs and expectations of our clients. We aim to build lasting relationships by focusing on transparency, collaboration, and customer satisfaction.
      </p>
    </div>

    <div className="about-section">
      <h2>Our Values</h2>
      <ul>
        <li>Integrity – We believe in doing the right thing, always.</li>
        <li>Quality – We ensure every project is completed to the highest standard.</li>
        <li>Commitment – We are committed to the success of our clients and projects.</li>
        <li>Innovation – We embrace new techniques and technology to improve our services.</li>
      </ul>
    </div>

    {/* <div className="about-footer">
      <p>Thank you for considering Vision Construction NY Inc. for your construction needs. We look forward to working with you!</p>
    </div> */}
        {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} VISION CONSTRUCTION NY, INC. All rights reserved.
      </footer>
  </div>

  )
}

export default About