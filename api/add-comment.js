let comments = [];

export default async function handler(req, res) {
    const { postId, content, username } = req.body;
    comments.push({ postId, content, username, created_at: Date.now() });
    
    const post = posts.find(p => p.id == postId);
    if (post) post.comments_count = (post.comments_count || 0) + 1;
    
    res.json({ success: true });
}
