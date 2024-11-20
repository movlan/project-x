import { Router } from 'express';
import { db } from '../db/index.js';
import { comments } from '../db/schema.js';
import { eq } from 'drizzle-orm';

const router = Router();

// Create comment
router.post('/', async (req, res) => {
  try {
    const comment = await db.insert(comments).values(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all comments
router.get('/', async (req, res) => {
  try {
    const allComments = await db.select().from(comments);
    res.json(allComments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get comment by id
router.get('/:id', async (req, res) => {
  try {
    const comment = await db.select().from(comments).where(eq(comments.id, req.params.id));
    if (!comment.length) return res.status(404).json({ error: 'Comment not found' });
    res.json(comment[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update comment
router.put('/:id', async (req, res) => {
  try {
    await db.update(comments).set(req.body).where(eq(comments.id, req.params.id));
    res.json({ message: 'Comment updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete comment
router.delete('/:id', async (req, res) => {
  try {
    await db.delete(comments).where(eq(comments.id, req.params.id));
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;