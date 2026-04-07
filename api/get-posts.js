let posts = [
    { id: 1, content: "Добро пожаловать в SOK Соцсеть! 🚀", username: "KacERORga", created_at: Date.now(), likes: 5, comments_count: 2, reposts: 1 },
    { id: 2, content: "Это полный аналог ВК, но наш! ❤️", username: "admin", created_at: Date.now() - 3600000, likes: 3, comments_count: 1, reposts: 0 }
];

export default async function handler(req, res) {
    res.json(posts.sort((a,b) => b.created_at - a.created_at));
}
