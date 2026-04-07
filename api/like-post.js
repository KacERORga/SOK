let posts = [];

export default async function handler(req, res) {
    const { postId } = req.body;
    const post = posts.find(p => p.id == postId);
    if (post) post.likes = (post.likes || 0) + 1;
    res.json({ success: true });
}
