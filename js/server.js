const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/location', (req, res) => {
  const location = req.body.location;

  // Save the location information to the database or perform any other desired operations

  res.send('Location saved successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
