import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { fetchRelay } from './fetchGraphQL';

const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

export { RelayEnvironment };
