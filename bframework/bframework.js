/*
=============================
ButterFramework JS - ButterFramework Team and contributors 
MIT License
2014
=============================
*/

// ====== Math functions ======

function bfCube(Cube) 
{
    return Cube*Cube*Cube; // Return the cube
}

function bfSquare(Square) // Return Square
{
    return Square*Square;
}

function bfdouble(Double) 
{
    return Double*2; // Return the double
}

function bftriple(Triple)
{
    return Triple*3; // Return the Triple
}

function bfchoosenumber(Min, max) 
{
     var bfchoosenum = min + (max-min+1)*Math.random();
     return Math.floor(bfchoosenum); // return a number between min and max
}

function bfrndnumber(NotHighterThan) // Return a number between 0 and the var NotHighterThan
{ 
    var rndnumber = Math.floor(Math.random()*NotHighterThan)+1;
    return rndnumber; // Return 
}

function bfGiveRound(Round) // Give the Round
{
    var bfGiveRoundvar = Math.round(Round);
    return bfGiveRoundvar;
}