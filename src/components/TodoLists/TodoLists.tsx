// @ts-nocheck
import { loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import { graphql } from 'babel-plugin-relay/macro';
import { RelayEnvironment } from '../../relay/RelayEnvironment';

const TodoListsQuery = graphql`
  query TodoListsQuery {
    todo_list_connection {
      edges {
        node {
          name
          description
          idx
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, TodoListsQuery, {});

export function TodoLists() {
  const data = usePreloadedQuery(TodoListsQuery, preloadedQuery);

  const todoLists = data.todo_list_connection.edges.map(({ node }) => node);

  console.log(data, todoLists);

  return (
    <ul>
      {todoLists.map(({ name, description, idx }) => (
        <li key={idx}>
          <p>{name}</p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
