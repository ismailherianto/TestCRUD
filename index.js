import express from "express";
import db from "./config/database.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.error('Connection error',error);
}

app.get('/', (req,res) => {
    res.send('holla');
})

app.listen(8000, () => console.log(`Server running at port 8000`));