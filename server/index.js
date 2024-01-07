const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const profileRoutes = require("./routes/profileRoutes");
const gameRoutes = require("./routes/gameRoutes");

app.use(express.json());
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define a simple API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.use("/", profileRoutes);
app.use("/", gameRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
