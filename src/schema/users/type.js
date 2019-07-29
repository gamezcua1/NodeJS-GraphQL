import { gql } from 'apollo-server';

const UserSchema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    name: String!
  }

  extends type Query {
    me: User
  }
`;

export default UserSchema;
