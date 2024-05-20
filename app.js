const express = require('express');
const fs = require('fs');

const app = express();

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from the server', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this end point');
// });
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours: tours,
    },
  });
});

//This is how we send different responses for different http methods request
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
