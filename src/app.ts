import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

import connectToDatabase from './config/db';

const app = express();

// Middleware setup
app.use(express.json());

// Connect to the database
connectToDatabase();

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});