import { Router } from 'express';
import { db } from '../db/index.js';
import { posts } from '../db/schema.js';
import { eq } from 'drizzle-orm';

const router = Router();

// Create post
router.post('/', async (req, res) => {
  try {
    const post = await db.insert(posts).values(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const allPosts = await db.select().from(posts);
    res.json(allPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get post by id
router.get('/:id', async (req, res) => {
  try {
    const post = await db.select().from(posts).where(eq(posts.id, req.params.id));
    if (!post.length) return res.status(404).json({ error: 'Post not found' });
    res.json(post[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update post
router.put('/:id', async (req, res) => {
  try {
    await db.update(posts).set(req.body).where(eq(posts.id, req.params.id));
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete post
router.delete('/:id', async (req, res) => {
  try {
    await db.delete(posts).where(eq(posts.id, req.params.id));
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;