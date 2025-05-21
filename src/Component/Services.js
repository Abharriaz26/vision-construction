import React from 'react'

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>We provide a wide range of construction services tailored to meet your needs</p>
      </div>

      <div className="services-section">
        <div className="service-item">
          <h2>Residential Construction</h2>
          <p>
            At Vision Construction BX Inc., we specialize in building beautiful, durable, and functional homes. From new builds to home extensions and renovations, our residential construction services are designed to provide quality and comfort for families.
          </p>
        </div>

        <div className="service-item">
          <h2>Commercial Construction</h2>
          <p>
            We provide high-quality commercial construction services, including office buildings, retail spaces, and more. Whether you are building from the ground up or renovating an existing property, we ensure every project meets industry standards and exceeds expectations.
          </p>
        </div>

        <div className="service-item">
          <h2>Project Management</h2>
          <p>
            Our project management team ensures that every project runs smoothly, staying on schedule and within budget. We work closely with clients and contractors to streamline communication and achieve the desired outcomes with professionalism.
          </p>
        </div>

        <div className="service-item">
          <h2>Renovations & Remodeling</h2>
          <p>
            Whether you are looking to update a single room or renovate your entire property, our team can transform your space into something extraordinary. We provide expert renovations and remodeling services, always maintaining the highest standards of craftsmanship.
          </p>
        </div>

        <div className="service-item">
          <h2>General Contracting</h2>
          <p>
            Vision Construction BX Inc. offers full-service general contracting. From initial concept to completion, we coordinate all aspects of the construction process, ensuring that all work is completed to the highest standards and in compliance with all regulations.
          </p>
        </div>

        <div className="service-item">
          <h2>Design & Build</h2>
          <p>
            We offer design-build services where we work with you from the concept stage all the way to project completion. By combining both design and construction under one roof, we ensure that your vision is executed seamlessly and efficiently.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} VISION CONSTRUCTION NY, INC. All rights reserved.
      </footer>
    </div>
  )
}

export default Services