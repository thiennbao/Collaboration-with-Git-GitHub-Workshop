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
        <p>For collaboration and more</p>
        `);
})

app.get("/what", (req, res) => {
    res.send(`
        <h1>Yes</h1>
        `);
})

app.get("/meo", (req, res) => {
    res.send(`
        <h1>Meo page</h1>
        
        <p>This is a simple meo page</p>
        <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
        `)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
