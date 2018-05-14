const { graphql } = require('graphql');
const { https } = require('firebase-functions');
const schema = require('./schema');

const gql = (query, variables, context) =>
  graphql(schema, query, undefined, context, variables);

exports.api = https.onRequest((req, res) =>
  gql(req.body.query, req.body.variables, {req, res})
    .then(result => res.json(result))
);
