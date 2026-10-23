import React from "react";
import Aurora from "./Aurora";

const Footer = () => {
  return (
      <section className="Footer">
      <div className="aurora-bg">
      <Aurora
      colorStops={["#3A29FF", "#43b345", "#43b345"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
      />
      </div>
       <div className="container">
         <div className="footer-wrapper">
            <div className="footer-top">
              <div className="footer-items">
                <h3>Services</h3>
                <li>Third Party Inspection</li>
                <li>Pre-shipment Inspection</li>
                <li>Technical Auditing</li>
                <li>Welding Inspection</li>
                <li>NDT Services</li>
              </div>

              <div className="footer-items">
                <h3>Quick Links</h3>
                 <li>About Us</li>
                 <li>Services</li>
                 <li>FAQs</li>
                 <li>Careers</li>
                 <li>Contact</li>
              </div>

              <div className="footer-items">
                <h3>Solutions</h3>
                <li>Oil & Gas</li>
                <li>Petrochemicals</li>
                <li>Power & Energy</li>
              </div>

              <div className="footer-items">
                <h3>Information</h3>
                 <li>Apsolute Private Limited</li>
                 <li><i className="fa-solid fa-location-dot"></i>Abu Dhabi</li>
                 <li><i className="fa-solid fa-phone"></i> +91 12345 67890</li>
                 <li><i className="fa-regular fa-envelope"></i> inquiry@apssolute.com</li>
              </div>

              <div className="footer-card">
                <h3>Follow Us on Our Journey</h3>
                 <div className="form-grp">
                  <input placeholder="Enter Your Mail"></input>
                  <button className="footer-btn"> Submit</button>
                 </div>
              </div>

            </div>

            <div className="footer-middle">
                <div className="Certification">
                  ISO Certified
                </div>

                <div className="socials">
                   <li>Follow Us On</li>
                   <li><i className="fa-brands fa-facebook-f"></i></li> 
                   <li><i className="fa-brands fa-instagram"></i></li> 
                   <li><i className="fa-regular fa-envelope"></i></li> 
                   <li><i className="fa-brands fa-linkedin-in"></i></li>  
                </div>
            </div>

            <div className="footer-bottom">
                <div className="logo">
                 <img src="/images/main-logo.png" alt="Logo" />
                </div>

                <div className="text">
                     &copy;Apsolute All Right Reserved.
                </div>

                <div className="terms">
                  <p>Terms</p>
                  <p>Privacy</p>
                  <p>Security</p>
                </div>
            </div>
         </div>
       </div>

      </section>
  );
};

export default Footer;