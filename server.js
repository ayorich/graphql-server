const express = require('express');
const expressGraphql = require('express-graphql');
const { schema, resolver } = require('./schema');
require('dotenv').config();

const app = express();

app.use(
    '/graphql',
    expressGraphql({
        schema,
        rootValue: resolver,
        graphiql: true,
    })
);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
