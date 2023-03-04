import React from 'react'

export const Footer = () => {
  return (
    <footer id="footer">
        <div className="container">
        <h3>Hendri Dwi Nugroho</h3>
        <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
            fuga maxime saepe commodi placeat.
        </p>
        <div className="social-links">
            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/noeg.heandriy" target="_blank" rel="noopener noreferrer" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="https://instagram.com/hendryprepz_" target="_blank" rel="noopener noreferrer" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="https://www.linkedin.com/in/hendri-dwi-nugroho-8611371a4/" target="_blank" rel="noopener noreferrer" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
        <div className="copyright">
            © Copyright{" "}
            <strong>
            <span>Hendri Dwi Nugroho</span>
            </strong>
            . All Rights Reserved
        </div>
        </div>
    </footer>
  )
}
