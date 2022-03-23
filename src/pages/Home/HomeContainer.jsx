import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { getMoviePopular } from '../../api'
import Home from './Home'

class HomeContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      page: this.props.match.params.page || 1,
      totalPages: 0
    }
  }

  fetchData = async () => {
    await getMoviePopular(this.props.match.params.page)
      .then(res => {
        this.setState({
          movies: res.data.results,
          page: res.data.page,
          totalPages: 500 // "TMDb" дает доступ только к 500 страницам
        })
      })
      .catch(err => console.log(err.status_message))
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.page !== this.props.match.params.page || this.state.filter !== prevState.filter) {
      this.fetchData()
    }
  }

  render() {
    return (
      <Home movies={this.state.movies} currentPage={this.state.page} totalPages={this.state.totalPages} />
    )
  }
}

export default withRouter(HomeContainer)