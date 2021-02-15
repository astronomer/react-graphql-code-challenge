import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});



ReactDOM.render(<App />, document.getElementById('root'));
