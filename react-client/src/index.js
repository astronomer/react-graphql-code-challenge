import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import styles from './styles.module.css';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

const USERS = gql`
    query users {
        users {
            id
            name
            email
            phone
        }
    }
`;

function Users() {
    const { loading, error, data } = useQuery(USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return data.users.map((user, index) => (
        <div key={user.id}>
            <p className={styles.name}>
                {user.name}
            </p>
            <p className={styles.email}>
                {user.email}
            </p>
            <p className={styles.phone}>
                {user.phone}
            </p>
        </div>
    ));
}

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <h1>Users</h1>
                <Users />
            </div>
        </ApolloProvider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
