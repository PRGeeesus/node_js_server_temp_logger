const express = require('express')
const app = express()
const port = 3000
var temp

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'esp_simulator_hmtl.html',
                                               'file:///C:/localhost:3000/incomeing',
                                               'https://martintestlogger.000webhostapp.com/esp_simulator_hmtl.html',
                                               'https://martintestlogger.000webhostapp.com');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
}

app.get('/', (request, response) => {
  response.send("Hello from Express! with acesses")
})
app.get('/home', (request, response) => {
  response.send("This is supposed to be the Home Site")
  console.log("Request to /home")
  //console.log(request)
})

app.post('/incomeing', function(request, response){
  console.log("Post to /incomeing")
  console.log(request.body)

    //console.log(request);
})


  console.log(`server is listening on ${port}`)
})
