const { postService } = require('../services');

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const posts = await postService.getPostById(id);
  
  if (!posts) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }

  return res.status(200).json(posts);
};

module.exports = {
  getAllPosts,
  getPostById,

};