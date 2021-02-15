import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Users } from './index.js';

function App(client) {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hello World!!</h1>
        <Users />
      </div>
    </ApolloProvider>
  )
};

export default App;
