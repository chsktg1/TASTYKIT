import './index.css'

import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

const Footer = () => (
  <div className="footer" style={{backgroundColor: '#0F172A'}}>
    <h1 style={{color: 'white'}}>Tasty Kitchens</h1>
    <p style={{color: 'white'}}>The only thing we are serious about is food.</p>
    <p style={{color: 'white'}}>Contact us on</p>
    <ul className="socialIconsHolder">
      <li style={{margin: '10px'}}>
        <FaPinterestSquare
          testid="pintrest-social-icon"
          size={40}
          color="white"
        />
      </li>
      <li style={{margin: '10px'}}>
        <FaInstagram testid="instagram-social-icon" size={40} color="white" />
      </li>
      <li style={{margin: '10px'}}>
        <FaTwitter size={40} color="white" testid="twitter-social-icon" />
      </li>
      <li style={{margin: '10px'}}>
        <FaFacebookSquare
          size={40}
          color="white"
          testid="facebook-social-icon"
        />
      </li>
    </ul>
  </div>
)

export default Footer
