const express = require('express');
const path = require('path');
const app = express();
const bodyParser     = require('body-parser');

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './react-ui/build')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

require('./routes')(app, {});
app.listen(port, () => console.log('Example app listening on port ' + port + '!'));