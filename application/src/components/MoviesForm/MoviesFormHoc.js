import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { addMovieMutation, updatedMovieMutation } from "./mutation";
import { moviesQuery } from "../MoviesTable/queries";
import { directorsQuery } from "./queries";

import { styles } from "./styles";

const withGraphQl = compose(
  graphql(addMovieMutation, {
    props: ({ mutate }) => ({
      addMovie: movies =>
        mutate({
          variables: movies,
          refetchQueries: [{ query: moviesQuery, variables: { name : ''} }]
        })
    })
  }),

  graphql(updatedMovieMutation, {
    props: ({ mutate }) => ({
      updateMovie: movies =>
        mutate({
          variables: movies,
          refetchQueries: [{ query: moviesQuery, variables: { name : ''} }]
        })
    })
  }),
  graphql(directorsQuery, {
    options: ({ name = "" }) => ({
      variables: { name }
    })
  })
);

export default compose(
  withStyles(styles),
  withGraphQl
);
