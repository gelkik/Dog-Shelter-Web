import React from 'react';

function ContactAddress() {
  return (
	  	<div className="col-xl-5 col-lg-6 col-md-8">
                <div className="contact-info-wrap">
                  <div className="contact-img">
                    <img src="img/images/contact_img.png" alt="" />
                  </div>
                  <div className="contact-info-list">
                    <ul>
                      <li>
                        <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                        <div className="content">
                          <p>2700 Penny Lane, Walnut Creek, CA, 94598, United States</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><i className="fas fa-phone-alt" /></div>
                        <div className="content">
                          <p> (555) 555 5555</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><i className="fas fa-envelope-open" /></div>
                        <div className="content">
                          <p>Contact@ info.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="contact-social">
                  </div>
                </div>
              </div>

  )
}

export default ContactAddress;
