import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
            query users {
                users {
                id
                name
                email
                phone
                }
            }
        `
    })
    .then((result) => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));
