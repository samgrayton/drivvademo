const express = require('express');
const app = express();
app.use(express.json());

let roads = [
  { id: 1, name: "Pacific Coast Highway", difficulty: 4 },
  { id: 2, name: "Tail of the Dragon", difficulty: 5 }
];

app.get('/api/roads', (req, res) => res.json(roads));
app.listen(3000, () => console.log('Demo running!'));
