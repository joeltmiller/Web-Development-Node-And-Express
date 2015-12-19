var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var app = express();

var fortunes = [
'Everythings going to be awesome!',
'Go buy insurance.',
'Meh, you\'re not going to die.',
'Win the lottery!'
]

app.engine('handlebars', handlebars.engine);

app.set('port', process.env.port || 3000);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	// res.type('text/plain');
	// res.send('Meadowlark Travel - Shiminah shiminah sha!')
	res.render('home');
});

app.get('/about', function(req, res){

	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	// res.type('text/plain');
	// res.send('Meadowlark Travel - We\'re a travel agency!')
	res.render('about', {fortune : randomFortune});
});


//If there are 3 parameters we know it's a 404
app.use(function(req, res, next){
	// res.type('text/plain');
	res.status(404);
	res.render('404');
	// res.send('404 - Not Found Yo');
});

//If there are 3 parameters we know it's a 500
app.use(function(err, req, res, next){
	// console.err(err.stack);
	// res.type('text/plain');
	res.status(500);
	res.render('500');
	// res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});