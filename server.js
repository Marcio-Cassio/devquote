const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "Premature optimization is the root of all evil. — Donald Knuth",
  "There are only two hard things in computer science: cache invalidation and naming things. — Phil Karlton",
  "It works on my machine. — Every developer, eventually",
  "A container is for life, not just for deployment. — Anonymous SRE",
  "If it hurts, do it more often. — Continuous delivery mantra",
  "Simplicity is prerequisite for reliability. — Edsger Dijkstra",
  "Make it work, make it right, make it fast. — Kent Beck",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Code is read much more often than it is written. — Guido van Rossum",
  "The best error message is the one that never shows up. — Thomas Fuchs",
  "Automate everything you do more than twice. — DevOps proverb",
  "A container is for life, not just for deployment. — Anonymous SRE",
];

// Serve everything in /public as static files (index.html, etc.)
app.use(express.static(path.join(__dirname, "public")));

// GET /api/quote -> one random quote as JSON
app.get("/api/quote", (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

// GET /health -> simple liveness check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`DevQuote running on http://localhost:${PORT}`);
});