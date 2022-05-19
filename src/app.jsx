import React, { Component } from 'react';
import Axios from 'axios';
import TopSpot from './topspot';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			topspots: []
		};
	}

	componentWillMount() {
    Axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
	}


  render() {
    return (
      <div className='App'>
        <div className='container border border-primary"'>
          <h2>San Diego Top Spots</h2>
          <h5>A list of the top 30 places to see in San Diego, California.</h5>
        </div>
        <hr/>
        <pre>
          { 
            this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} 
              />
            )
          )}
        </pre>
      </div>
    );
  }
}

