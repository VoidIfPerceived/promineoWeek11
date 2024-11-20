/* Check player turn XXXXXXXX
Let player play XXXXXXXX
Check that player plays in legal square XXXXXXXX
    Change squares back end value to 1 or 2 (1 for x and 2 for o) XXXXXXXXX


    Check if player has tic tac toe XXXXXXXXX
    Check value of squares XXXXXXXXX
        Check that line = either 3 or 6 XXXXXXXXX
            Then check that square in line is = to other square is = to last square XXXXXXXXX
            (Square 1, 2, 3 -> Value 1, 1, 1 (=3) -> X Win -> Value 1, 2, 0 (=3) -> 1 != 2 -> Game continues) XXXXXXXX
If no winner, change player turn text
End turn
*/

let board = $("#board");
console.log($("#board"));
console.log($("td").children());
let squareValues = [0,0,0,0,0,0,0,0,0];
let ticTacText = [" ","X","O"];
let squareSum = 0;
let winner = 0; //if 0 no winner - if 1 x winner - if 2 o winner



//Could also do this procedurally but that's for another refactor
console.log(squareValues);
let player = 0;
let turnNum = 0;
//0 = x, 1 = y
let update = () => {
    $("td").children().each(function(index, element) {
    $(element).html(ticTacText[squareValues[index]]);
    if(player == 0) {
        $("#turnInfo").text("X's Turn");
    }   else {
        $("#turnInfo").html("O's Turn");
    }



    if(winner == 1) {
        $("#turnInfo").text("X Wins!");
    }
    if(winner == 2) {
        $("#turnInfo").text("O Wins!");
    }
    if(winner == 0 && squareSum > 12) {
        $("#turnInfo").text("It's a tie!");
    }
})}

console.log(winner);
update();

$(".gmBtn").on("click", function() {
    console.log(this);
    let id = $(this).attr("id") - 1;
    if (squareValues[id] == 0) {
        if (player == 0) {
            squareValues[id] = 1;
            player = 1;
            squareSum += 1;
        } else {
            squareValues[id] = 2;
            player = 0;
            squareSum += 2;
        }
        update();
        winCheck();
        update();
        turnNum++;
        console.log(turnNum);
        console.log(player);
        console.log(id);
        console.log(squareSum);
        console.log(squareValues);
        console.log(winner);
    }

} );

let winCheck = () => {
//8 winning combos
//start check tree from 0 - 3
    if (squareValues[0] > 0) {
        if (squareValues[1] > 0 && squareValues[2] > 0) { //0 1 2 Tree
            if (squareValues[0] + squareValues[1] + squareValues[2] === 3) {
                winner = 1;
            }
            if (squareValues[0] + squareValues[1] + squareValues[2] === 6) {
                winner = 2;
            }
        } //0 1 2 Tree
        if (squareValues[3] > 0 && squareValues[6] > 0) { //0 3 6 Tree
            if (squareValues[0] + squareValues[3] + squareValues[6] === 3) {
                winner = 1;
            }
            if (squareValues[0] + squareValues[3] + squareValues[6] === 6) {
                winner = 2;
            }
        } //0 3 6 Tree
        if (squareValues[4] > 0 && squareValues[8] > 0) { //0 4 8 Tree
            if (squareValues[0] + squareValues[4] + squareValues[8] === 3) {
                winner = 1;
            }
            if (squareValues[0] + squareValues[4] + squareValues[8] === 6) {
                winner = 2;
            }
        } //0 4 8 Tree
    }
    if (squareValues[1] > 0) {
        if (squareValues[4] > 0 && squareValues[7] > 0) { //1 4 7 Tree
            if (squareValues[1] + squareValues[4] + squareValues[7] === 3) {
                winner = 1;
            }
            if (squareValues[1] + squareValues[4] + squareValues[7] === 6) {
                winner = 2;
            }
        } //1 4 7 Tree
    }
    if (squareValues[2] > 0) {
        if (squareValues[4] > 0 && squareValues[6] > 0) { //2 4 6 Tree
            if (squareValues[2] + squareValues[4] + squareValues[6] === 3) {
                winner = 1;
            }
            if (squareValues[2] + squareValues[4] + squareValues[6] === 6) {
                winner = 2;
            }
        } //2 5 8 Tree
        if (squareValues[5] > 0 && squareValues[8] > 0) { //2 4 6 Tree
            if (squareValues[2] + squareValues[5] + squareValues[8] === 3) {
                winner = 1;
            }
            if (squareValues[2] + squareValues[5] + squareValues[8] === 6) {
                winner = 2;
            }
        } //2 4 6 Tree
    }
    if (squareValues[3] > 0) {
        if (squareValues[4] > 0 && squareValues[5] > 0) { //3 4 5 Tree
            if (squareValues[3] + squareValues[4] + squareValues[5] === 3) {
                winner = 1;
            }
            if (squareValues[3] + squareValues[4] + squareValues[5] === 6) {
                winner = 2;
            }
        } //3 4 5 Tree
    }
    if (squareValues[6] > 0) {
        if (squareValues[7] > 0 && squareValues[8] > 0) { //6 7 8 Tree
            if (squareValues[6] + squareValues[7] + squareValues[8] === 3) {
                winner = 1;
            }
            if (squareValues[6] + squareValues[7] + squareValues[8] === 6) {
                winner = 2;
            }
        } //6 7 8 Tree
    }
}
/*
Winning combos
0 1 2 X, 3 4 5 X, 6 7 8 X - Horizontal
0 3 6 X, 1 4 7 X, 2 5 8 X - Vertical
0 4 8 X, 2 4 6 X - Diagonal

To win - combos must either add to 3 using all or 6 using all

First we check - What numbers are 0

*/

$("#reset").on("click", function() {
    console.log(this)
    turnNum = 0;
    player = 0;
    squareValues = [0,0,0,0,0,0,0,0,0];
    squareSum = 0;
    winner = 0;
    update();
} );

//reset
//resets game to original configuration