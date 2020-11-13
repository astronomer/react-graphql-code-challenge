# Astronomer GraphQL Code Challenge

This task is for demonstrating your understanding of GraphQL practices.

### System Requirements:

- NPM & Node
- Yarn

### Installation + Local Dev:

`cd graphql-server`

1. Run `yarn install`
2. Run `yarn start`

Playground is available @ `http://localhost:4000`

### Challenge:

1. Add support for creating a user:
```
mutation createUser($email: String!, $password: String!) {
  createUser(email: $email, password: $password) {
    user {
      id
      email
    }
  }
}
```

2. Add support for returning all users in the database:
```
query users {
  users {
    id
    email
  }
}
```

3. Move onto `react-client` for next steps.
