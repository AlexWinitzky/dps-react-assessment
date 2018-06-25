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
        this.setState({ beers: res.data.entries })
      })
      .catch(err => {
        console.log(err)
      })
  }

  beers = () => {
    return this.state.beers.map(b => {
      return (
        <Card key={b.name}>
          <Card.Content>
            {b.name_display}
          </Card.Content>
        </Card>
      )
    }
    )
  }
  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          {this.beers()}
        </Card.Group>
      </Container>
    )
  }
}

export default BeerList;