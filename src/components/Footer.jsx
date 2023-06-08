import React ,{ Component } from "react";
import { Link } from "react-router-dom";
// import { motion } from framer-motion;
import './Footer.css';


function Footer() {
  return (
  <div id="footer-container">
    <div className="foot-column">
      <div className="foot-header">
        Contact Us
      </div>
      <div>
      823 Franklin Road 
      Mercer, Pennslyvania
      16137
      </div>
      <div>
      (724) 992-1927
      </div>
      <div>
      Simplysweets@zoominternet.net
      </div>
    </div>
    <div className="foot-column">
    <div className="foot-header">
        Hours
        </div>
        <table >
          <tr>
            <td>
              Monday
            </td>
            <td>
              CLOSED
            </td>
          </tr>
          <tr>
            <td>
              Tuesday
            </td>
            <td>
              9am - 4pm
            </td>
          </tr>
          <tr>
            <td>
              Wednesday
            </td>
            <td>
              9am - 4pm
            </td>
          </tr>
          <tr>
            <td>
              Thursday
            </td>
            <td>
              9am - 6pm
            </td>
          </tr>
          <tr>
            <td>
              Friday
            </td>
            <td>
              9am - 6pm
            </td>
          </tr>
          <tr>
            <td>
              Saturday
            </td>
            <td>
              9am - 4pm
            </td>
          </tr>
          <tr>
            <td>
              Sunday
            </td>
            <td>
              CLOSED
            </td>
          </tr>
        </table>
    </div>
    <div className="foot-column">
    <div className="foot-header">
        Find Us @
        </div>
    </div>
  </div>
  );
  
}

export default Footer;
