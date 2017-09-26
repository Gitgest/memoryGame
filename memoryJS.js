//Checking if
var xhr = new XMLHttpRequest();
//Should be used to acquire pokemon information
var url = "https://pokeapi/co/api/v2/"
var pokeID = 0;
var spriteURL ="";

//Tile or Card status, "has it been flipped?", "are two of them the same?"
var flipped = 0;
var same = false;

xhr.onreadystatechange = function () {
    if(this.readyState === this.DONE) {
        console.log(this.status)
    }
}

xhr.open("GET", url);

xhr.send();


console.log(xhr.status);
console.log(xhr.statusText);

// should be used when the page loads and called when a game has ended.
function scramble(){

    //Should attach an image twice on the flex-box grid
    var poke = [];
    for (i = 0; i < 8; i++){
        getPokeID();

        $.getJSON ( url ,{

        });
    }

}

//generate a pokemon id from 1 to 721
function getPokeID(){
    var pokeID = Math.floor(Math.random() * (721 - 1 + 1) + 1);
    return pokeID;

}




