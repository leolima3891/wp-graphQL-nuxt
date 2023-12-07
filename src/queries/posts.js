const axios = require('axios');

class PostsQuery {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getAllPosts() {
    const query = `
      query {
        posts {
          edges {
            node {
              title
              content
            }
          }
        }
      }
    `;

    try {
      const response = await axios.post(this.endpoint, { query });
      return response.data.data.posts.edges.map(post => post.node);
    } catch (error) {
      throw new Error(`Error querying GraphQL: ${error.message}`);
    }
  }
}

module.exports = PostsQuery;