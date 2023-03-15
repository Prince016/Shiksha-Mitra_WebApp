import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <>
    <div className="footer">

      <div className="footer-container">

        <div className="heading">

          <div className="heading-left">

            <div className="heading-width">


              <h1>Want to learn more about NCU?</h1>
              <p>
                Be a part of an interesting journey, a journey that will take you to
                the heights.
              </p>

            </div>
          </div>
          <div className="heading-right">
            <h2>Follow Us</h2>
            <div className="icons">
              <div className="icon-1">

                <i class="fa fa-brands fa-facebook"></i>
              </div>
              <div className="icon-1">

                <i class="fa fa-brands fa-twitter"></i>
              </div>
              <div className="icon-1">

                <i class="fa fa-brands fa-instagram"></i>
              </div>
              <div className="icon-1">

                <i class="fa fa-brands fa-youtube"></i>
              </div>

              <div className="icon-1">

                <i class="fa fa-brands fa-linkedin"></i>
              </div>

            </div>

          </div>

        </div>
        <div className="midfooter">

          <div className="midfooter-left">
            <h2>Contact Us</h2>
            <p><i class="fa fa-solid fa-location-arrow"></i> Address: HUDA Sector 23-A Gurugram – 122017 </p>
            <p><i class="fa fa-solid fa-phone"></i> Address: HUDA Sector 23-A Gurugram – 122017 </p>
            <p><i class="fa fa-solid fa-phone"></i> Address: HUDA Sector 23-A Gurugram – 122017 </p>
            <p><i class="fa fa-solid fa-envelope"></i> Address: HUDA Sector 23-A Gurugram – 122017 </p>
            <p className="locate" >Locate Us | Contact Us</p>
          </div>


          <div className="midfooter-right">
            <h2>Important Link</h2>
            <div class="footer-grid-container">
              <div class="footer-grid-item"><h1>Blog</h1></div>
              <div class="footer-grid-item"><h1>Careers</h1></div>
              <div class="footer-grid-item"><h1>Alumni</h1></div>
              <div class="footer-grid-item"><h1>Stakeholders Feedback</h1></div>

            </div>
          </div>

        </div>






      </div>

      <div className="end-footer">
        <p>"The Information Technology related network guidelines issued by NCU is in consonance with the laws of the Government of India and rules and regulations under the information technology and network resources policy of the university. Therefore any misuse or unlawful activities are strictly prohibited and shall be dealt with under the applicable law."</p>
      </div>
    </div>
  </>
  )
}

export default Footer