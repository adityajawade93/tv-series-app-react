import React, { Component } from 'react'
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader'
import Intro from '../../components/Intro'

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }
    
    onSeriesInputChange = event => {
        const seriesName = event.target.value
        this.setState({ seriesName, isFetching: true })
        fetch(`https://api.tvmaze.com/search/shows?q=${ seriesName }`)
          .then(response => response.json())
          .then(json => this.setState({ series: json, isFetching: false }))
    }

    render() {

        const { series, seriesName, isFetching } = this.state 

        return (
            <div>
                <Intro message="Here You Can Find All Your Loved Series" />
                <div>
                    <input 
                        value={ seriesName } 
                        type="text" 
                        onChange={ this.onSeriesInputChange } 
                    />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please Enter Series Name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV Series have been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={ this.state.series } />
                }
            </div>
        )
    }
}

export default Series