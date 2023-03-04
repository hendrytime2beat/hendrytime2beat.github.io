import React from 'react'

const Profile = () => {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Hendri Dwi Nugroho</h1>
          <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Full Stack Web Developer</span></p>
          <div class="social-links">
            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/noeg.heandriy" target="_blank" rel="noopener noreferrer" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="https://instagram.com/hendryprepz_" target="_blank" rel="noopener noreferrer" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="https://www.linkedin.com/in/hendri-dwi-nugroho-8611371a4/" target="_blank" rel="noopener noreferrer" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </section>
  )
}

export default Profile