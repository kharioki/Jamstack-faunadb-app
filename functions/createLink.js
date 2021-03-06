const { CREATE_LINK_MUTATION } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };

  try {
    const { createLink: createdLink } = await sendQuery(
      CREATE_LINK_MUTATION,
      variables
    );
    return formattedResponse(200, createdLink);
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
}
