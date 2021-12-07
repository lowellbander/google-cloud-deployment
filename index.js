let express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Here it is, the aid app! With tweaked text!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ready: http://localhost:${PORT}/`);
});
