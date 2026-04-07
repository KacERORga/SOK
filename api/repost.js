let posts = [];

export default async function handler(req, res) {
    const { postId, username } = req.body;
    const original = posts.find(p => p.id == postId);
    if (original) {
        original.reposts = (original.reposts || 0) + 1;
        posts.unshift({
            id: Date.now(),
            content: `🔁 Репост: ${original.content}`,
            username,
            created_at: Date.now(),
            likes: 0,
            comments_count: 0,
            reposts: 0
        });
    }
    res.json({ success: true });
}
