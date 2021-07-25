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

const UPDATE_LINK_MUTATION = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!) {
    updateLink(
      id: $id,
      data: {
        name: $name, 
        url: $url, 
        description: $description, 
        archived: $archived
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

const DELETE_LINK_MUTATION = `
  mutation($id: ID!) {
    deleteLink(id: $id){
      _id
    }
  }
`;

module.exports = {
  GET_LINKS_QUERY,
  CREATE_LINK_MUTATION,
  UPDATE_LINK_MUTATION,
  DELETE_LINK_MUTATION,
};
