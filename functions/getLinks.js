const axios = require('axios');
require('dotenv').config();

exports.handler = async (event) => {
  const GET_LINKS_QUERY = `
    query {
      allLinks{
        data{
          _id
          name
          url
          description
          archived
        }
      }
    }
  `;

  const { data } = await axios({
    url: `${process.env.GRAPHQL_URL}`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: GET_LINKS_QUERY,
      variables: {},
    },
  });
  console.log(data);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
