import { compose } from "recompose";
import { graphql } from "react-apollo";

import { deleteDirectorMutation } from "./mutation";
import { directorQuery } from "../DirectorsTable/queries";

const withGraphQlDelete = graphql(deleteDirectorMutation, {
  props: ({ mutate }) => ({
    deleteDirect: id =>
      mutate({
        variables: id,
        refetchQueries: [{ query: directorQuery, variables: { name : ''} }]
      })
  })
});

export default compose(withGraphQlDelete);