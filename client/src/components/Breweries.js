import React from 'react'
import axios from 'axios';
import {
  Container,
  Card,
  Image,
} from 'semantic-ui-react'

class BreweryList extends React.Component {
  state = { brews: [] }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        this.setState({ brews: res.data.entries })
      })
      .catch(err => {
        console.log(err)
      })
  }

  brews = () => {
    return this.state.brews.map(b => {
      return (
        <Card key={b.name}>
          <Card.Header>
            {b.name}
          </Card.Header>
          <Image src='medium'/>
          <Card.Content>
            est. {b.established}
          </Card.Content>
          <Card.Content>
            {b.website}
          </Card.Content>
          <Card.Meta>
            {b.description}
          </Card.Meta>
        </Card>
      )
    }
    )
  }
  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          {this.brews()}
        </Card.Group>
      </Container>
    )
  }
}

export default BreweryList;