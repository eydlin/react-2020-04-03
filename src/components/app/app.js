import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Order from '../order';
import { Layout } from 'antd';
import Header from '../header';

class App extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Order restaurants={restaurants} />
        <Layout>
          <Header></Header>
          <Layout.Content>
            <Restaurants restaurants={restaurants} />
          </Layout.Content>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
