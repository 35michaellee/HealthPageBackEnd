import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config as dotenvConfig } from 'dotenv';
import {healthTipsRoutes} from './routes/healthTipsRoutes.mjs'; // Import health tips routes
import { groceriesRoutes } from './routes/groceriesRoutes.mjs';; // Import groceries routes



dotenvConfig(); //saves io process.env

const app = express(); //be used to define routes and middleware for backend.
// Allow requests from all origins
app.use(cors());


// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection; //This line creates a reference to the MongoDB connection object provided by Mongoose.
mongoose.connect(mongoURI);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));


app.get('/', (req, res) => {
  res.send('Welcome to Home Page ');
});
app.use('/health-tips', healthTipsRoutes);
app.use('/groceries', groceriesRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



