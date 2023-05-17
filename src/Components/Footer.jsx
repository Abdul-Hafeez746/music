import React from 'react'

const Footer = () => {
  return (
    <>
   <footer className="footer-distributed">
  <div className="footer-left">
    <h3>GitHub <span>Profile Viewer App</span></h3>
    <p className="footer-links">
      <a href="#">Home</a>
      |
      <a href="#">About</a>
      |
      <a href="#">Contact</a>
      |
      <a href="#">Blog</a>
    </p>
    <p className="footer-company-name">Copyright © 2021 <strong>GitHub</strong> All rights reserved</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p><span>Lahore</span>
        Pakistan</p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>0304**9**25</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>About the App</span>
      <strong>GitHub Profile Viewer App</strong>
    </p>
    <div className="footer-icons">
      <a href="#"><i className="fab fa-facebook" /></a>
      <a href="#"><i className="fab fa-instagram" /></a>
      <a href="#"><i className="fab fa-linkedin" /></a>
      <a href="#"><i className="fab fa-twitter" /></a>
      <a href="#"><i className="fab fa-youtube" /></a>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer