import React from 'react'

export const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
        <div className="container" data-aos="fade-up">
        <div className="section-title">
            <h2>About</h2>
            <p>
            Lulusan Universitas PGRI Yogyakarta jurusan Informasi Teknologi. Memiliki kemampuan yang sangat baik dalam menggunakan Phyton untuk menganalisis data dan meningkatkan efisiensi operasional. Sedang mencari pekerjaan untuk menjadi seorang data analis.
            </p>
        </div>
        <div className="row">
            <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack &amp; Web Developer Developer.</h3>
            <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua./
            </p>
            <div className="row">
                <div className="col-lg-6">
                <ul>
                    <li>
                    <i className="bi bi-chevron-right" /> <strong>Birthday:</strong>{" "}
                    <span>03 September 1995</span>
                    </li>
                    {/* <li>
                    <i className="bi bi-chevron-right" /> <strong>Website:</strong>{" "}
                    <span>www.hppro.com</span>
                    </li> */}
                    <li>
                    <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                    <span>+6289 8737 5213</span>
                    </li>
                    <li>
                    <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                    <span>Yogyakarta, Indonesia</span>
                    </li>
                </ul>
                </div>
                <div className="col-lg-6">
                <ul>
                    <li>
                    <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                    <span>27</span>
                    </li>
                    <li>
                    <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                    <span>Master</span>
                    </li>
                    <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>PhEmailone:</strong> <span>hendrytime2beat@gmail.com</span>
                    </li>
                    <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                    </li>
                </ul>
                </div>
            </div>
            <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis optio
                vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
                incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
                officiis quidem quia. Sed et consectetur qui quia repellendus itaque
                neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
                repellendus omnis culpa magni laudantium dolores.
            </p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About