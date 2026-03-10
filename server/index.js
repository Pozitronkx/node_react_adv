const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Handle Post requests
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
})

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('/*splat', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});