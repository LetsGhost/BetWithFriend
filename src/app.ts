import express from 'express';

const app = express();

// Middleware setup
app.use(express.json());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});