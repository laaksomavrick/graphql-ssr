import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const Blog: React.SFC<{}> = (props) => (
  <div className="blog">
    <Query
      query={gql`
      {
        posts {
          id,
          title,
          tags {
            id
            tag
          }
        }
      } 
      `}
    >
      {({ loading, error, data }) => {

        if (loading) { return <p>Loading...</p> };
        if (error) { return <p>Error :(</p> };

        return data.posts.map(({id, title }: { id: number, title: string }) => (
          <div key={id}>
            {title}
          </div>
        ));
      }}
    </Query>
  </div>
)

export default Blog;