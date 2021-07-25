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

module.exports = {
  GET_LINKS_QUERY,
};