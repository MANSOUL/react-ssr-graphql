import fetch from 'isomorphic-fetch';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

function createClient() {
  let clientConfig = {
    uri: `http://localhost:3000/graphql`
  };
  return new ApolloClient(clientConfig);
}

export function fetchTodos() {
  const client = createClient();
  return client.query({
    query: gql`
      {
        list {
          todos {
            id
            content
          }
        }
      }
    `
  })
  .then(res => res.data)
}

