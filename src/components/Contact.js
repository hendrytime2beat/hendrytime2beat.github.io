import React from 'react'

export const Contact = () => {
  return (
    <section id="contact" classname="contact">
      <div classname="container" data-aos="fade-up">
        <div classname="section-title">
          <h2>Contact</h2>
        </div>
        <div classname="row mt-1">
          <div classname="col-lg-4">
            <div classname="info">
              <div classname="address">
                <i classname="bi bi-geo-alt">
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </i>
              </div>
              <i classname="bi bi-geo-alt">
                <div classname="email">
                  <i classname="bi bi-envelope">
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </i>
                </div>
                <i classname="bi bi-envelope">
                  <div classname="phone">
                    <i classname="bi bi-phone">
                      <h4>Call:</h4>
                      <p>+1 5589 55488 55s</p>
                    </i>
                  </div>
                  <i classname="bi bi-phone"></i>
                </i>
              </i>
            </div>
            <i classname="bi bi-geo-alt">
              <i classname="bi bi-envelope">
                <i classname="bi bi-phone"></i>
              </i>
            </i>
          </div>
          <i classname="bi bi-geo-alt">
            <i classname="bi bi-envelope">
              <i classname="bi bi-phone">
                <div classname="col-lg-8 mt-5 mt-lg-0">
                  <div
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    classname="php-email-form"
                  >
                    <div classname="row">
                      <div classname="col-md-6 form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div classname="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div classname="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div classname="form-group mt-3">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="{5}"
                        placeholder="Message"
                        required=""
                      />
                    </div>
                  </div>
                </div>
              </i>
            </i>
          </i>
        </div>
      </div>
    </section>
  )
}
