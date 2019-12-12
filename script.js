const express = require('express')
var ip = require("ip");
const app = express()
const port = 3000
var temp


app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'esp_simulator_hmtl.html',
                                               'file:///C:/localhost:3000/incomeing',
                                               'https://martintestlogger.000webhostapp.com/esp_simulator_hmtl.html',
                                               'https://martintestlogger.000webhostapp.com/');

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
    return console.log('something bad happened - this was send by the node server', err)
}

app.get('/', (request, response) => {
  response.send("get request to / - this was send by the node server")
})
app.get('/home', (request, response) => {
  response.send("get request to /home - this was send by the node server")
  console.log("Request to /home")
  //console.log(request)
})

app.post('/incomeing', function(request, response){
  console.log("Post to /incomeing - this was send to the node server logging body")
  console.log(request.body)
    //console.log(request);
})


console.log(`server is listening on ${port} at IP:`)
console.log ( ip.address() );
console.dir ( ip.address() );

})
