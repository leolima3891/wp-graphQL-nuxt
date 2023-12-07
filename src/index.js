const PostsQuery = require('./queries/posts');

class WordPressGraphQL {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.postsQuery = new PostsQuery(endpoint);
  }

  async getAllPosts() {
    return this.postsQuery.getAllPosts();
  }
}

module.exports = WordPressGraphQL;