import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import expressHbs from "express-handlebars";
import "dotenv/config";

const port = process.env.PORT || 3000;
const host = process.env.HOST || "💻 localhost"

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up template engine
app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: "views/layouts",
    partialsDir: "views/partials",
    extname: "hbs",
    defaultLayout: "main-layout",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      // allowProtoMethodsByDefault: true
    },
  })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {});
});

const directoryPath = join(__dirname, 'json'); // Path to /json directory

// Endpoint to list all files in the directory
app.get('/json', (req, res) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        res.json(files); // Return the list of files as JSON
    });
});

// Dynamic endpoint for each file in the directory
app.get('/json/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = join(directoryPath, filename + ".json");

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.json(JSON.parse(data)); // Send the file content as response
    });
});

app.get("/test", (req, res) => {
  res.json({
    status: "✅ Offline",
    from: host,
    message: "Hello World. GDGoC HCMUS is a developer student club",
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
});

app.get("/meo", (req, res) => {
  res.send(`
    <h1>Meo page</h1>
    
    <p>This is a simple meo page</p>
    <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
  `);
});

// code goes here
app.get("/thing-ntploc21", (req, res) => {
    res.send(`
    <h1>Thing page</h1>
    
    <p>A simple Loc page change</p>
    <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
  `);
});

app.get("/aaa", (req, res) => {
  res.send(`
    <h1>About page</h1>
    <p>This is a simple about page</p>
    <br>
    <h3>Made purely for learning purposes</h3>
    <p>For collaboration and more</p>
  `);
});

app.get("/thing", (req, res) => {
  res.send(`
    <h1>Thing page</h1>
    
    <p>A simple page change</p>
    <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
