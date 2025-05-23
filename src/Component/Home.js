import React from 'react'


const Home = () => {
  return (
  <div className="home-container">
  
    <div className="home-header">
      <h1>Welcome to Vision Construction BX Inc.</h1>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="pic4.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="pic5.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="pic6.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<hr></hr>
      
      <p>Your trusted partner in exceptional construction services</p>
    </div>

    
<div className="home-gallery">
  {[
    {
      src: "Residential.jpg.jpg",
      alt: "Residential Construction",
      title: "Residential Construction",
      text: "From new home builds to remodeling, we provide high-quality residential construction services. Our team ensures that every home is built with care and attention to detail.",
    },
    {
      src: "Commercial.jpg.jpg",
      alt: "Commercial Construction",
      title: "Commercial Construction",
      text: "Vision Construction BX Inc. also specializes in commercial construction. Whether you need office buildings, retail spaces, or other commercial properties, we deliver top-tier service.",
    },
    {
      src: "project.jpg.jpg",
      alt: "Project Management",
      title: "Project Management",
      text: "Our expert project management team ensures that your construction projects are completed on time and within budget. We manage everything from start to finish with professionalism and transparency.",
    },
    {
      src: "roof.jpg.jpg",
      alt: "Roofing Services",
      title: "Roofing",
      text: "We provide expert roofing installation and repairs, ensuring long-lasting protection and durability.",
    },
    {
      src: "water.jpg.jpg",
      alt: "Waterproofing Services",
      title: "Waterproofing",
      text: "Protect your property from moisture and water damage with our reliable waterproofing solutions.",
    },
  ].map((item, index) => (
    <div className="gallery-item" key={index}>
      <img src={item.src} alt={item.alt} />
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </div>
  ))}
</div>


    {/* <div className="home-footer">
      <p>Contact us today to start your next construction project with Vision Construction NY Inc.!</p>
    </div> */}
        {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} VISION CONSTRUCTION BX, INC. All rights reserved.
      </footer>

  </div>
  
  )
}

export default Home