const { DELETE_LINK_MUTATION } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
  if (event.httpMethod !== 'DELETE') {
    return formattedResponse(405, { err: 'Method not supported' });
  }

  const { id } = JSON.parse(event.body);
  const variables = { id };

  try {
    const { deleteLink: deletedLink } = await sendQuery(
      DELETE_LINK_MUTATION,
      variables
    );
    return formattedResponse(200, deletedLink);
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
}
