import React, { useState } from 'react'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './movie.css'

const Movie = ({details, videos}) => {

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

    const addToFavorites = (id) => {

        const changedFavorites = [...favorites]

        if(favorites.includes(id)) {
        const index = favorites.indexOf(id)
        if(index !== -1) {
            changedFavorites.splice(index, 1)
        }
        }else {
        changedFavorites.push(id)
        }

        localStorage.setItem('favorites', JSON.stringify(changedFavorites))
        setFavorites(changedFavorites)
    }

    return (
        <>
        {!details.status_code ?
            <div className='movie'>

                <div className="movie-details" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`}}>

                    <div className="container">

                        <img src={`https://image.tmdb.org/t/p/original${details.poster_path}`} alt="Poster" className="movie-details-poster" />

                        <div className="movie-details__info">

                            <h1 className="movie-details-name">{details.title}</h1>

                            <span className="movie-details-genre">
                                {details.genres &&
                                    details.genres.map((item, id) => 
                                        `${item.name}${id !== details.genres.length - 1 ? ', ' : ''}`
                                    )
                                }
                            </span>

                            <p className="movie-details-description">{details.overview}</p>

                            <ul className="movie-details__other">
                                {details.release_date ? <li>Дата релиза: {details.release_date}</li> : ''}
                                {details.budget ? <li>Бюджет: {details.budget}$</li> : ''}
                                {details.vote_average ? <li>Рейтинг: {details.vote_average}</li> : ''}
                            </ul>

                            {details.production_companies ? <div className="movie-details-companies">
                                {details.production_companies.map(company => 
                                    {return company.logo_path && <img key={company.id} src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={company.name} />}
                                )}
                            </div> : ''}

                        </div>

                        <FontAwesomeIcon icon={faBookmark} className="movie-details-favorites" style={{color: `${favorites.includes(details.id) && '#01b4e4'}`}}
                            fontSize={36} onClick={() => addToFavorites(details.id)} />
                    </div>

                </div>

            </div>
        : <div className="container"><h1 className='movie-error' style={{textAlign: 'center', marginTop: '10%'}}>{details.status_message}</h1></div>
        }
        </>
  )
}

export default Movie