
import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaGithub } from 'react-icons/fa';


function Footer () {
    return (
        
          <div className='footer'>    
                      <ul className='ul'>
                          <li><FaFacebookF /> </li>
                          <li><FaTwitter /> </li>
                          <li><FaPinterest /> </li>
                          <li><FaInstagram /> </li>
                          <li><FaGithub /> </li>
                          
                          
                      </ul>  
                  <div>
                    <small className='website-rights'>&copy;{new Date().getFullYear()}  All RIGHT RESERVED</small>
                  </div>
          </div>  
       
    )
}

export default Footer;
