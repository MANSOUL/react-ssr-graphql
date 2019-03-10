import { gql } from 'apollo-server-koa';

const typeDefs = gql`
  """
  Query
  """
  type Query {
    list: TodoCollection!
    item(id: ID!): Todo
  }

  """
  Todo Collection
  """
  type TodoCollection {
    todos: [Todo]!
  }

  """
  Todo
  """
  type Todo {
    id: ID!
    content: String
    updatedAt: String
    createdAt: String
    done: Boolean
    delete: Boolean
  }

  """
  Mutation
  """
  type Mutation {
    create(
      content: String!
    ):Message

    done(
      id: ID!
    ):Message

    delete(
      id: ID!
    ): Message
  }

  type Message {
    success: Boolean!
  }
`;

export default typeDefs;