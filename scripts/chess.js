var board = document.getElementById("board");
var inversed = false;
var color = ["black", "white"];
var piece = ["Pawn", "Rook", "Knight", "Bishop", "King", "Queen"];
var squares = [];
var reversed = false;

var pieceInfo = [{}];


window.onload = createBoard;

function generatePices()
{
    for(var i = 0; i < 2; i++)
    {
        var int = 1;
        for(var o = 0; o < 8; o++)
        {
            if(i == 0)
            {
                var temp = {};
                temp["piece"] = piece[int];
                temp["color"] = color[i];
                pieceInfo.push(temp);
                if(int <= 5 && !reversed){int++;}
                else{int--;  reversed = true;};
                
            }

            if(i == 1)
            {
                var temp = {};
                temp["piece"] = piece[int];
                temp["color"] = color[i];
                pieceInfo.push(temp);
                int++
            }
        }
        console.log(pieceInfo);
    }
}

function createBoard()
{
    var int = 0;
    for(var i = 0; i < 64; i++)
    {
        board.innerHTML += `<div id='square${i}' class="chessSquare">${i + 1}</div>`
        
        int++;
        if(int % 8 === 0)
        {
            setColor(i);
            inversed = !inversed;
        }
        else
        {
            setColor(i);
        }
    }
    generatePices();
}

function setColor(index)
{
    var square = document.getElementById(`square${index}`);
    
    
    if(!inversed)
    {
        if(index % 2 === 0)
        {
            square.style.backgroundColor = "black";
        }
        else
        {
            square.style.backgroundColor = "grey";
        }
    }
    else
    {
        if(index % 2 === 0)
        {
            square.style.backgroundColor = "grey";
        }
        else
        {
            square.style.backgroundColor = "black";
        }
    }

    squares.push(`square${index}`);
    
}

function populate()
{
    for(var i = 0; i < 2; i++)
    {
        for(var o = 0; o < 16; i++)
        {
            if(i == 0)
            {

            }
        }
    }
}