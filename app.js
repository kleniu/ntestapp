var express = require('express')
var app = express()
var os = require('os')
var hostname = os.hostname()
var dateFormat = require('dateformat');

const port = 3000

const jokes = [
	"Kann ein Känguru höher als ein Haus springen? Ja! Weil ein Haus nicht springen kann.",
	"Mein Hund jagte immer Leuten auf dem Fahrrad hinterher, bis ich ihm das Fahrrad wegnahm!",
	"Eine alte Dame trinkt zum ersten Mal Whisky. Sie überlegt eine Weile und meint dann: Merkwürdig, das Zeug schmeckt genau so wie die Medizin, die mein seliger Mann zwanzig Jahre einnehmen musste.",
	"Chef, darf ich heute zwei Stunden früher Schluss machen? Meine Frau will mit mir einkaufen gehen. - Kommt gar nicht in Frage. - Vielen Dank Chef, ich wusste, sie würden mich nicht im Stich lassen.",
	"Der Deutschlehrer fragt Bini: Was ist das für ein Fall, wenn du sagst: Das Lernen macht mir Freude? Bini überlegt nicht lange: Ein seltener, Herr Lehrer."
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/', (req, res) => {
	var i = getRandomInt(0, jokes.length - 1);
	res.send(' Joke from host: ' + hostname + '\r\n @host time    : ' + dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss') + '\r\n => ' + jokes[i] + '\r\n');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
