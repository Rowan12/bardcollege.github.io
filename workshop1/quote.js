/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var things = ["Dance", "Art", "Dance", "Football", "Math", "Bard"];
var programmers = ["musician", "artist", "choreographer", "director", "mathematician", "architect"]
var castles = ["museums", "bridges", "cities"]
var exertions = ["effort", "train", "struggle", "toil", "endeavor", "hard work", "labor"];
var airs = ["sky", "atmosphere", "stars", "ether", "wind"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(things);
var thing = things[pick];
var programmer = programmers[pick];
var castles = choose(castles);
var exertion = choose(exertions);
var air = choose(airs);

document.getElementById("thing").innerHTML = thing;
document.getElementById("person").innerHTML = programmer + "s";

var q = document.getElementById("quote");

q.innerHTML =
    "\"The " + musician +
    ", like the poet, works everyday to improve its technique. He builds his " +
    music + " in the " + sense + ", of " + light + ", creating by " + exertion + " of the imagination.\"" +
    "\u2014" +  "Fred Brooks, " + programmer;

q.innerHTML += "<br><br><br>";


var is = ["is", "is not", "is like", "includes", "excludes", "is beyond",
	  "extends", "encodes", "represents", "signifies", "consists of"];

for (var i = 0; i < is.length; i = i + 1){
    q.innerHTML += "Code " + is[i] + " language. <br>";
    q.innerHTML += "Language " + is[i] + " code. <br>";
}

q.innerHTML += "\u2014 For Loop";
