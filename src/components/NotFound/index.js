import {Link} from 'react-router-dom'
import Header from '../Header'

import image from '../assets/erroring1.png'

const NotFound = () => (
  <>
    <Header />
    <img src={image} alt="not found" />
    <h1>Page Not Found</h1>
    <p>we are sorry, the page you requested could not be found</p>
    <Link to="/">
      <button type="button">Home Page</button>
    </Link>
  </>
)

export default NotFound
