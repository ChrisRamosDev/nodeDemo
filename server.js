const express = require('express');
const path = require('path');

const complements = [
  "You look nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do anything",
  "You've gotta far in this course. You're really smart!",
  "You're programming! How cool is that",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const getRandomComplement = () => {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/complement', (req, res) => {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.use('/public', express.static('./public'));

app.listen(3000);
console.log("listening on http://localhost:3000");