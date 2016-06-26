
// For practice;
// This is a random lineup generator for the Cardinals (if the Cardinals had players from other teams and history);
// It's really not very funny.
// But it does what it's supposed to do.

var randomFirsts = ["Matt Carpenter", "Kolten Wong", "Jedd Gyorko"];
var randomSeconds = ["Almedys Diaz", "Matt Adams", "Robinson Cano"];
var randomThirds = ["Albert Pujols", "Scott Rolen", "Anthony Rizzo"];
var randomFourths = ["Matt Holliday", "Jhonny Peralta", "Jim Edmonds"];
var randomFifths = ["Yadier Molina", "Jose Molina", "Benji Molina"];
var randomSixths = ["Alex Rodriguez", "Alexander Hamilton", "Aaron Burr"];
var randomSevenths = ["Mike Matheny", "Tony La Russa", "Brian's Dad"]
var randomEighths = ["Marquis de Lafayette", "Tommy Pham", "Stephen Piscotty"];
var randomNinths = ["Adam Wainwright", "Taylor Goldsmith", "Clayton Kershaw"];

var randomFirst = randomFirsts[Math.floor(Math.random() * 3)];
var randomSecond = randomSeconds[Math.floor(Math.random() * 3)];
var randomThird = randomThirds[Math.floor(Math.random() * 3)];
var randomFourth = randomFourths[Math.floor(Math.random() * 3)];
var randomFifth = randomFifths[Math.floor(Math.random() * 3)];
var randomSixth = randomSixths[Math.floor(Math.random() * 3)];
var randomSeventh = randomSevenths[Math.floor(Math.random() * 3)];
var randomEighth = randomEighths[Math.floor(Math.random() * 3)];
var randomNinth = randomNinths[Math.floor(Math.random() * 3)];

var randomLineup = randomFirst + ", " + randomSecond + ", " + randomThird + ", " + randomFourth + ", " + randomFifth + ", " + randomSixth + ", " + randomSeventh + ", " +  randomEighth + ", " + randomNinth;

console.log(randomLineup);