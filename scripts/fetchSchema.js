require('dotenv-flow').config();
const { execSync } = require('child_process');

console.log(`Fetching GraphQL Schema from ${process.env.REACT_APP_HASURA_ENDPOINT}`);

execSync(`get-graphql-schema -h "X-Hasura-Admin-Secret=${process.env.REACT_APP_HASURA_ADMIN_SECRET}" ${process.env.REACT_APP_HASURA_ENDPOINT} > schema.graphql`);
