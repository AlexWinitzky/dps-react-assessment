import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import beerPic from '../images/beer.jpeg';

class Home extends Component {
  state = { assignmentMarkdown: '' };

  componentDidMount() {
    axios.get('/api/assignment_details')
      .then(res => {
        this.setState({ assignmentMarkdown: res.data.file })
      })
      .catch( error => {
        console.log(error.response);
    });
  }

  render() {
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='medium' src={beerPic} alt='Glass of beer' />
          <Header as='h1' style={styles.header}>If you like websites about beer, you just hit the jackpot.</Header>
        </Segment>
        <Grid>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  But just what is a beer website?
              </Header>
              <Divider />
              Well, it's basically like any other website, it's content is just centered around beer as opposed to say, donuts.  
              For example, on a beer website you will almost NEVER find information on banking but you WILL find stuff about 
              lagers or IPAs.  Don't expect to get it right away, it takes time.
            </Segment>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Overview:
              </Header>
              <Divider />
              <ol>
              <li>  It's a website</li>
              <li>  It's a drink</li>
              <li>  It's a website about a drink</li>
              </ol>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  }
}

export default Home;
