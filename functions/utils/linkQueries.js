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

const CREATE_LINK_MUTATION = `
  mutation($name: String!, $url: String!, $description: String!) {
    createLink(
      data: {
        name: $name, 
        url: $url, 
        description: $description, 
        archived: false
      }
    ) {
      _id
      name
      url
      description
      archived
    }
  }
`;

module.exports = {
  GET_LINKS_QUERY,
  CREATE_LINK_MUTATION,
};
