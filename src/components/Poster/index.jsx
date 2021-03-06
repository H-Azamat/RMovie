import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import './poster.css'

const Poster = ({movie, favorites, addToFavorites}) => {
    
    return (
        <div className="home-list-item" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w500/${movie.poster_path})`}}>

            <div className="home-list-item__overlay">

                <FontAwesomeIcon fontSize={45} icon={faBookmark}
                    className={`home-item-favorites ${favorites.includes(movie.id) ? 'active' : ''} `} onClick={() => addToFavorites(movie.id)} />

                <NavLink className="home-item-name" to={`movie/${movie.id}`}>
                    {movie.title}
                </NavLink>

            </div>

        </div>
    )
}

export default Poster