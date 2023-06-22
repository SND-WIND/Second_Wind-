const knex = require("../knex");

class Like {
  constructor({ id, comment}) {
    this.id = id;
    this.comment = comment;
  }

  static async listLikesForPost(post_id) {
    return knex('likes')
    .where('post_id', post_id)
    .groupBy('user_id')
    .count('id AS likeCount')
    .distinct('user_id')
    .countDistinct('user_id AS peopleCount')
    .first();
  }

  static async create({ user_id, post_id}) {
    try {
       const result = await knex.raw(
         `
         INSERT INTO likes (user_id, post_id)
         VALUES (?, ?) RETURNING *`,
         [user_id, post_id]
       );
       console.log("model", user_id, post_id);
       return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async delete(id) {
    try {
      const query = "DELETE FROM likes WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

const testModel = async () => {
// const user_id = 5;
//const post_id = 7;
//const LikeObj = await Like.create({ user_id, post_id});
//   // const onePost = await Post.find(6);
//   //const allPosts = await Post.list();
// //   const removeLike = await Like.delete(7);
// //   console.log('like removed', removeLike);
  console.log('likes', await Like.listLikesForPost(7));
  //console.log("LikeObj", LikeObj);
 };

testModel();

module.exports = Like; 
