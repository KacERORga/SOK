let comments = [];

export default async function handler(req, res) {
    const { postId } = req.query;
    const postComments = comments.filter(c => c.postId == postId);
    res.json(postComments);
}
