import express from 'express';
import mongoose from 'mongoose';
import FormData from './models/Form.model.js'; 
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json()); 
app.use(cors())

// Connect to MongoDB
const connection = mongoose.connect(MONGO_URL);

if(!connection) {
  console.log('Error connecting to MongoDB');
  process.exit(1);
} else {
  console.log('Connected to MongoDB');
}

app.post('/submit-data', async (req, res) => {
  const formData = new FormData(req.body); 

  try {
    await formData.save(); 
    res.status(201).json({ message: 'Data saved successfully', data: formData });
  } catch (error) {
    res.status(400).json({ message: 'Error saving data', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
