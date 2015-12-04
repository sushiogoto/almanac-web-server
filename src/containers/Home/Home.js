import React, { Component } from 'react';
// Uncomment for: import Link from react-router in order to route user to a particular view
// import { Link } from 'react-router';

// CounterButton is only an example, but this can be anything
import { CounterButton } from 'components';
import config from '../../config';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // the config object is used to specify app-wide data, like title and description
    return (
      <div className={styles.home}>
        <div className={styles.masthead}>
          <div className="container">
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>
          </div>
        </div>

        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1"/>
            <CounterButton multireducerKey="counter2"/>
            <CounterButton multireducerKey="counter3"/>
          </div>

          <h2>Almanac News Feed</h2>

          {/** Note from David **
          I've gone ahead and taken the liberty of poking around a solid boilerplate app to get us up and running. 
          That being said, the only things we're really taking advantage of is:
            * A tried and true method of app organization
            * Webpack and other config files set up [linting, ES6/Babel compile, redux dev tools, etc]
          Let's say we want to route the user to a 'Widgets'. We use React Router's component:
            <Link to="/widgets"> ANY_TEXT_HERE </Link>
          We can also display code by using the code tags <code></code>
          **/}

        </div>
      </div>
    );
  }
}
