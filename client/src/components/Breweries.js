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
        <Card key={b.id}>
          {/* const images = b.images.map( p => {
            return (
              <Card.Content>
                {p.medium}
              </Card.Content>
            )
          }) */}
          <Card.Header>
            {b.name}
          </Card.Header>
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
      <div>
        <Segment basic style={styles.fullHeight}>
          <Segment basic textAlign='center'>
            <Image style={styles.centered} size='medium' src={beerPic} alt='Glass of beer' />
            <Header as='h1' style={styles.header}>Where does beer come from?  Well, that's a pretty dumb question, it's breweries.</Header>
          </Segment>
          <Container>
            <Card.Group itemsPerRow={4}>
              {this.brews()}
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

export default BreweryList;