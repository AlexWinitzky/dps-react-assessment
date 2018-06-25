import React from 'react'
import axios from 'axios';
import {
  Container,
  Card,
  Segment,
  Header,
  Image,
} from 'semantic-ui-react'
import beerPic from '../images/beer.jpeg';

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
          <Card.Header>
            {b.name_display}
          </Card.Header>
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
      <div>
      <Segment basic style={styles.fullHeight}>
      <Segment basic textAlign='center'>
        <Image style={styles.centered} size='medium' src={beerPic} alt='Glass of beer' />
        <Header as='h1' style={styles.header}>This is how to keep the sadness away.</Header>
      </Segment>
      <Container>
        <Card.Group itemsPerRow={4}>
          {this.beers()}
        </Card.Group>
      </Container>
      </Segment>
      </div>
    )
  }
}
const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#ADD8E6'
  },
  fullHeight: {
    height: '100vh',
  },
}

export default BeerList;