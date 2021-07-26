# Jamstack-faunadb-app

This is a simple application that demonstrates how to use Faunadb with a React Jamstack application.

This project was created using the [Create React App](https://github.com/facebook/create-react-app) tool.

## Installation

Simply run `npm install` to install the dependencies.

## Running the app

To run the app, run `netlify dev`.
This will run the app locally and open the app in your browser.
You'll need to install the [netlify-cli](https://www.netlify.com/docs/cli/) to run the app locally. `npm install -g netlify-cli`.

The react app and the serverless functions will be served at `https://localhost:8888`.

## environment variables

You can set the following environment variables in a .env file in the root of the project:
`FAUNA_SECRET_KEY` - `<your faunadb secret key>`
`GRAPHQL_URL` - `https://graphql.fauna.com/graphql`
