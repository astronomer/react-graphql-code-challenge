# Astronomer React Code Challenge

This task is for demonstrating your understanding of using GraphQL in React and creating React components.

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
Note: `apollo-boost`, and `graphql` are already installed.
```
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});
```

2. Query API for all users.
```
query users {
  users {
    id
    name
    email
    phone
  }
}
```

3. Create a user result component. Use CSS modules to style of the component.
4. Display the list of users using the new component on the homepage.

Feel free to add any packages needed to complete the challenge. <br/>
You're also welcome to reorganize the `src` folder to suite your preference.

**Optional:** Integrate Jest tests for your new component and the GraphQL query.
