import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {apiLogo, logo} from '../../img'

import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="container">

        <div className="navbar__left">

          <NavLink to=""><img className="navbar-logo" alt="RMovie" src={logo} /></NavLink>

          <input className="navbar-search" type="search" name="search" placeholder="Поиск фильмов и сериалов" />
          
        </div>

        <div className="navbar__right">

          <FontAwesomeIcon fontSize={"35px"} icon={faBookmark} className="navbar-favorites" title="Избранное" />
        
          <a href="https://www.themoviedb.org/" target="blank">
            <img className="navbar-logo__api" alt="TMDb" src={apiLogo} />
          </a>
          
        </div>

        
      </div>


    </div>
  )
}

export default Navbar