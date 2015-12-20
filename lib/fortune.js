var fortunes = [
'Everythings going to be awesome!',
'Go buy insurance.',
'Meh, you\'re not going to die.',
'Win the lottery!'
]

exports.getFortune = function(){
	var randomIndex = Math.floor(Math.random() * fortunes.length);
	return fortunes[randomIndex];
};