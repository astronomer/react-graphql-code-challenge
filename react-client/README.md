# Astronomer React Code Challenge

This task is for demonstrating your understanding of GraphQL practices.

### System Requirements:

- NPM & Node
- Yarn

### Installation + Local Dev:

`cd react-client`

1. Run `yarn install`
2. Run `yarn start`

Client is available @ `http://localhost:3000/`

### Challenge:

1. Connect to the `graphql-server` with [Apollo Client](https://www.apollographql.com/docs/react/).<br/>
Note: `apollo-boost`, `@apollo/react-hooks`, and `graphql` are already installed.
```
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});
```

2. Query all users.
```
query users {
  users {
    id
    email
  }
}
```

3. List users in the client.

Don't worry about the styles on the client - it's not important for this challenge.<br/>
Feel free to add any packages needed to complete the challenge.
