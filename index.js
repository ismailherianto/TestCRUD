import express from "express";
import db from "./config/database.js";

const app = express();

try {
    db;
    console.log('Connected');
} catch (error) {
    throw error;
}

app.get('/', (req,res) => {
    res.send('holla');
})

app.listen(8000, () => console.log(`Server running at port 8000`));