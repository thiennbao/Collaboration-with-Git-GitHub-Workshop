import express from 'express'
import 'dotenv/config'
import favicon from 'serve-favicon'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'

const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const faviconPath = join(__dirname, 'images', 'favicon.ico')
console.log("File: ", faviconPath)
app.use(favicon(faviconPath))

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
        <h1>Khang page</h1>
        
        <p>This is a simple Khang page</p>
        <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
        `)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
