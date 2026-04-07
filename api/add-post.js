let posts = [];

export default async function handler(req, res) {
    const { content, username } = req.body;
    posts.unshift({
        id: Date.now(),
        content,
        username: username || "Пользователь",
        created_at: Date.now(),
        likes: 0,
        comments_count: 0,
        reposts: 0
    });
    res.json({ success: true });
}
