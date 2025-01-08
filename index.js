import express from 'express'
import 'dotenv/config'

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.json({
        from: "Express server",
        status: "✅Still online",
        message: 'Hello World. Programmed to work but not to feel',
        "time-stamp": new Date().toISOString()
    });
});

app.get("/about", (req, res) => {
    res.send(`
        <h1>About page</h1>
        <p>This is a simple about page</p>
        <br>
        <h3>Made purely for learning purposes</h3>
        `);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})