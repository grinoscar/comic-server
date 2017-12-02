let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 3000;


let routes = require('./routes/root');

app.use(bodyParser.urlencoded({ extended:  true }));

routes(app);

app.listen(port);
console.log(`comic server REST API server starter on ${port}`);
