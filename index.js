import express from "express";
import db from "./config/database.js";
import router from "./routes/routes.js";

const app = express();

try {
    db;
    console.log('Connected');
} catch (error) {
    throw error;
}

app.use('/home',router)

app.listen(8000, () => console.log(`Server running at port 8000`));