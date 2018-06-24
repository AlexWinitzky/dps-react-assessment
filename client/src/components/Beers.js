import React from 'react'
import axios from 'axios';

class BeerList extends React.Component {
  state = { beers: [] }

  componentDidMount() {
  axios.get('/api/all_beers')
    .then(res => {
      const beers = res.data
      this.setState({ beers })
    })
    .catch( err => {
      console.log(err)
    })
}

  render() {
    return(
      <ul>
       { this.state.beers.map( b => <li>{b.name}</li>) }
      </ul>
    )
  }
}

export default BeerList;