import express from 'express';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';
import commentsRouter from './routes/comments.js';
import jwtCheck from './auth/index.js';
import { requiredScopes } from 'express-oauth2-jwt-bearer';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Auth middleware
app.use(jwtCheck);

// Routes
app.use('/api/users', usersRouter);
app.use('/api/posts', requiredScopes('read:posts'), postsRouter);
app.use('/api/comments', requiredScopes('read:comments'), commentsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
