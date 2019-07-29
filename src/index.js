import { gql } from 'apollo-server';

// Types
import Books from "./schema/books/BookScema";
import Authors from "./schema/authors/AuthorSchema";
import Users from "./schema/users/UserSchema";

// Scalar resolvers
import DateResolver from "./scalars/DateResolver";

const MainTypes = gql`
  scalar Date

  type Query
  type Mutation
`;

export const types = [
  MainTypes,
  Books.type,
  Authors.type,
  Users.type
]

export const resolvers = [
  DateResolver,
  Books.resolvers,
  Books.mutations,
  Authors.mutations,
  Authors.resolvers,
  Users.mutations,
  Users.resolvers
]