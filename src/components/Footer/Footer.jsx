import React from "react";
import './Footer.css';

const Footer=()=>{
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p><img src="https://i.postimg.cc/QC9nZ5Pd/face.png" alt="" /></p>
              <p><img src="https://i.postimg.cc/cHNQL3rJ/whatsapp.png" alt="" /></p>
              <p><img src="https://i.postimg.cc/yN6DQTgc/ln.png" alt="" /></p>
              <p><img src="https://i.postimg.cc/526GwhpC/instagram.png" alt="" /></p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} CodeInn. All rigth reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="terms"><div><p>Terms & Conditions</p></div></a>
            <a href="privacy"><div><p>Privacy</p></div></a>
            <a href="security"><div><p>Security</p></div></a>
            <a href="cookie"><div><p>Cookie Ceclaration</p></div></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;