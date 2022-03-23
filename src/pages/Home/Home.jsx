import React, { useState } from 'react'
import {Pagination, Poster} from '../../components'

import './home.css'

const Home = ({movies, currentPage, totalPages, changeFilter, filter}) => {

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
    <div className="home">
        
      <div className="container">

        <h1 className="home-title">
          Популярные
        </h1>

        {movies.length > 1 && <div className="home-list">
            {
              movies.map(item => <Poster movie={item} key={item.id} addToFavorites={addToFavorites} favorites={favorites} />)
            }
            
          </div>
        }

        {movies.length > 1 &&
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        }

      </div>

    </div>
  )
}

export default Home