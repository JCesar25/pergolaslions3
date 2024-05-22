import React from 'react';

const ContactoFormulario = () => {
  return (
    <form name="contact" data-netlify="true" className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="phone" name="phone" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="5"></textarea>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
};

export default ContactoFormulario;