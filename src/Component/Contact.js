const Contact = () => {
  return (
    <div>
      {/* Header
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand h1 mb-0">VISION CONSTRUCTION NY, INC.</span>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6 mb-4">
            <h4>Company Information</h4>
            <p><strong>Contact Person:</strong> Muhammad Riaz</p>
            <p><strong>Phone:</strong> +1 917-309-5514</p>
            <p><strong>Address:</strong> 9 Frederick Place, Mount Vernon, NY 10552</p>
          </div>

          {/* Google Map */}
          <div className="col-md-6">
            <h4>Our Location</h4>
              <div className="rounded shadow" style={{ width: '100%', height: '450px' }}>
    <iframe
      title="Company Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.5971368752114!2d-73.83701568459735!3d40.91555397930783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2edfc567bbff3%3A0x1b65070bb44dbf5c!2s9%20Frederick%20Pl%2C%20Mt%20Vernon%2C%20NY%2010552%2C%20USA!5e0!3m2!1sen!2sus!4v1716125160000"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
          </div>
        </div>
      </div>
       <div className="about-footer">
      <p>Thank you for considering Vision Construction NY Inc. for your construction needs. We look forward to working with you!</p>
    </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} VISION CONSTRUCTION NY, INC. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact
