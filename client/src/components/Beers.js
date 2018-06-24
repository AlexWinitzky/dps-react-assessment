import React from 'react'
import axios from 'axios';
import {
  Container,
  Card,
} from 'semantic-ui-react'

class BeerList extends React.Component {
  state = { beers: [] }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then(res => {
        // const beers = res.data
        this.setState({ beers: res.data })
      })
    .catch( err => {
      console.log(err)
    })
  }

  beers = () => {
    let { beers } = this.state
    return beers.map( b => {
      
      <Card key={b.id}>
        <Card.Content>
          { b.name }
        </Card.Content>
      </Card>
      
    }
    )
  }
  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          { this.beers() }
        </Card.Group>
      </Container>
    )
  }
  // render() {
  //   // let { beers } = this.state
  //   return(
  //     <ul>
  //      { this.state.beers.map( b => <li key={b.entries}>{b.name}</li>) }
  //     </ul>
  //   )
  // }
}

export default BeerList;