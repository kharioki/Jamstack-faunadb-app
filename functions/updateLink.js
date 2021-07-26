const { UPDATE_LINK_MUTATION } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
  if (event.httpMethod !== 'PUT') {
    return formattedResponse(405, { err: 'Method not supported' });
  }

  const { _id: id, archived, name, url, description } = JSON.parse(event.body);
  const variables = { id, archived, name, url, description };

  try {
    const { updateLink: updatedLink } = await sendQuery(
      UPDATE_LINK_MUTATION,
      variables
    );
    return formattedResponse(200, updatedLink);
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
}
