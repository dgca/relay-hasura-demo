import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
} from 'relay-runtime';

const endpoint = process.env.REACT_APP_HASURA_ENDPOINT as string;
const hasuraAdminSecret = process.env.REACT_APP_HASURA_ADMIN_SECRET as string;

export async function fetchRelay(
  params: RequestParameters,
  variables: object | undefined,
) {
  if (!params.name || !params.text) {
    throw new Error('fetchRelay must be called valid name and text params');
  }
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`,
  );

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'X-Hasura-Admin-Secret': hasuraAdminSecret,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}
