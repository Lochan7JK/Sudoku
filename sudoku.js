var numSelected = null;
var tileSelected = null;
var errors = 0;

var board = [
    "53..7....",
    "6..195...",
    ".98....6.",
    "8...6...3",
    "4..8.3..1",
    "7...2...6",
    ".6....28.",
    "...419..5",
    "....8..79"
]

var solution = [
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
]

window.onload = function(){
    setGame();
}

function setGame(){
    // Digits 1-9
    for(let i = 1; i <= 9; i++){
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);

        number.addEventListener("click", selectNumber);
    }

    // Board 9*9
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c] != "."){
                tile.innerText = board[r][c];
                tile.classList.add("fixed-tiles");
            }
            if(r == 2 || r == 5){
                tile.classList.add("horizontal-line");
            }
            if(c == 2 || c == 5){
                tile.classList.add("vertical-line");
            }
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);

            tile.addEventListener("click", selectTile);
        }
    }

}


function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile(){
    if(numSelected){
        // let's also deal with the problem of numbers being overridden on clicking to the board tiles 
        if(this.innerText != ""){
            return;
        }
        // this.innerText = numSelected.id;

        let coords = this.id.split("-"); // ["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if(solution[r][c] == numSelected.id){
            this.innerText = numSelected.id;
        }
        else{
            errors++;
            document.getElementById("errors").innerText = errors;
        }
    }

}

function solve(){
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let solved = document.getElementById(r + "-" + c);
            if(solved.innerText == ""){
                solved.innerText = solution[r][c];
                solved.style.color = "green"; // highlight solved tiles
            }
            
        }
    }
}