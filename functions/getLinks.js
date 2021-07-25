const { GET_LINKS_QUERY } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_LINKS_QUERY);
    const data = res.allLinks.data;
    return formattedResponse(200, data);
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
}
