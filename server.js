require('dotenv').config()
let express = require('express');
let path = require('path');
let app = express(); 
let PORT = process.env.PORT || 8080; 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.text());
// app.use(express.json({type:'application/vnd.api+json'}));

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});