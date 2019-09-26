import { gql } from "apollo-boost";

export const directorsQuery = gql`
  query directorsQuery($name: Srting) {
    directors(name: $name) {
      id
      name
    }
  }
`;
