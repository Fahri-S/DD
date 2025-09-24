const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;
const FILE = "users.json";

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Pastikan file users.json ada
if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify([])); // mulai dengan array kosong
}

// Helper: baca data user
function readUsers() {
  const data = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(data);
}

// Helper: simpan data user
function writeUsers(users) {
  fs.writeFileSync(FILE, JSON.stringify(users, null, 2));
}

// REGISTER
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  let users = readUsers();

  // cek user sudah ada atau belum
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "Username sudah terdaftar!" });
  }

  users.push({ username, password });
  writeUsers(users);

  res.json({ message: "User berhasil terdaftar!" });
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let users = readUsers();

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Username atau password salah!" });
  }

  res.json({ message: "Login berhasil!" });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
