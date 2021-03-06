<p align="center"><img src="https://imgur.com/FGT9yfC.png" width="350"></p>

<p align="center">Super-GraphiQL is a powerful yet simple GUI designed for testing your GraphQL API.</p>

With Super-GraphiQL users are able to quickly setup a series of tests for GraphQL API, better understand the execution of queries and save test cases for easy reuse.

<p align="center"><img src="https://imgur.com/oUNUTSW.png" width="750"></p>

## Getting Started
<b>Express Middleware</b> 
<p>To use Super-GraphiQL, install and incorporate the express middleware into your existing project with npm:</p>

```sh

$ npm install --save super-graphiql-express

```

To use the express middleware, simply import the package into your server file and specify the HTTP endpoint and / or websocket endpoint of your GraphQL server. The SuperGraphiQL IDE will automatically be rendered at the '/supergraphiql' route and include support for GraphQL subscriptions.

```sh

const { supergraphiqlExpress } = require('super-graphiql-express');

app.use('/supergraphiql', 
supergraphiqlExpress({
  endpointURL: "/graphql",
  subscriptionsEndpoint: "ws://localhost:9999/subscriptions"
}));

```

<b>React Component</b>
You can incorporate Super-GraphiQL into your existing project with npm:

```sh
$ npm install --save super-graphiql

```

## Features 
Super-GraphiQL leverages components of [GraphiQL](https://github.com/graphql/graphiql) under the hood but developed to be a more powerful and flexibile GraphQL IDE to enable a smooth and efficient testing workflow. Super-GraphiQL adds the following features to the GraphQL ecosystem:
  
  - Supports multiple GraphQL queries and mutations in one test script
  - Save and reuse test scripts including a searchable Query history
  - Includes real world examples with NoSQL and SQL databases.

## How to use?
- Build test scripts full of queries and test only the ones you need
<img src="https://imgur.com/3mqzuy6.gif" title="search-history" width="750"/>

- Search History to find the reusable queries
<img src="https://imgur.com/ogV6z6Q.gif" title="search-history" width="750"/>

## Packages
[super-graphiql-express](https://www.npmjs.com/package/super-graphiql-express): Express middleware

## Authors
[Albert Chen](https://github.com/ac3639) | [Marissa Lafontant](https://github.com/mlafontant) | [Eduardo Maillo](https://github.com/eduardomaillo) | [Angela Scerbo](https://github.com/angelascerbo)

## License
See LICENSE file
