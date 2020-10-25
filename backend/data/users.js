const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Harsh Patel",
    email: "harsh@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Fuckka",
    email: "fuck@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
