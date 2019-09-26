import { gql } from "apollo-boost";

export const deleteDirectorMutation = gql`
  mutation deleteDirect($id: ID) {
    deleteDirect(id : $id) {
      id
    }
  }
`;