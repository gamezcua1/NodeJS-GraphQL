import { gql } from 'apollo-server';

const UserSchema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    name: String!
    
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    me: User
    users: [User]
    user(id: ID!): User
  }

  extend type Mutation {
    signup(username: String!, password: String!, name: String!): User
  }
`;

export default UserSchema;
