// try running this code with `node app.js`, and you'll notice it errors.
// what must you do to make the code work?

var express = require('express')
var students = require('./students')
var app = express()


// use a for loop to create an array with each lowercase letter in the alphabet
// resulting array should be ['a', 'b', ... 'y', 'z']
var alphabet = [];
for(let i = 0; i < 26; i++){
    alphabet.push(String.fromCharCode(i + 97))
}


// use a for loop to generate an app.get function for each endpoint
// callback function should res.send the letter's index in the alphabet
// do not use block scoped variables (let)
// do not use Array.prototype.forEach()
// first endpoint should be:
// app.get('/a', function(req, res) { res.send("1") });
for(let i = 0; i < alphabet.length; i++){
    app.get(('/' + alphabet[i]), function(req, res){
        res.send((i + 1).toString())
    })
}





// by the time you get to this point, jordan will have pushed a new commit
// updating ./students.js
// import that array into this file, and write an endpoint at GET /partners
// that randomly pairs students. feel free to use whatever data structure you
// see fit

app.get('/partners', function(req, res){
    var p1, p2;
    var pairs = [];
    var havePair = [];
    for(let i = 0; i < students.length / 2; i++){
        p1 = i;
        var min = i + 1;
        var max = students.length;
        var rand = Math.floor(Math.random() * (max - min)) + min;

        havePair.push([students[p1], students[rand]])
    }
        res.send(havePair)
        
})



app.get('/', function (req, res) {
    res.send('Hello, World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
