import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getMovieDetails } from '../../api'
import Movie from './Movie'

export class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {},
            videos: []
        }
    }
    

    fetchData = async () => {
        await getMovieDetails(this.props.match.params.id)
            .then(res => this.setState({
                details: res.data
            }))
            .catch(err => this.setState({
                details: err.response.data
            }))
    }

    componentDidMount() {
        this.fetchData()
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            this.fetchData()
        }
    }


    render() {
        return (
            <Movie details={this.state.details} />
        )
    }
}

export default withRouter(MovieContainer)