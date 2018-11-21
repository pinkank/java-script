"using strict"
console.log("Welcome to the world of Chess");

//base class
     class Pieces  {
            constructor(id,position,image,color,points,isAlive)
            {
                this.id = id;
                this.position = position; 
                this.image = image;
                this.color = color;
                this.points = points;
                this.isAlive = isAlive;
            }

        }

// king class
    class King extends Pieces {
            constructor(id,position,color,isAlive) 
            {
                super(id,position,"King",color,"10",isAlive);
            }
        movement(){
                return "King moves 1 step";
            }
    }
   
// Queen Class
   class Queen extends Pieces {
            constructor(id,position,color,isAlive)
            {
                super(color,position,"Queen",id,"9",isAlive);
            }
            movement(n){
                return "Queen moves " + n +" step";
            }
    }

// Bishop Class
   class Bishop extends Pieces {
        constructor(id,position,color,isAlive)
        {
                super(id,position,"Bishop",color,"3",isAlive);         
        }
        movement(n){
                return "Bishop moves " + n +" step";
            }
   }

// Rook Class
   class Rook extends Pieces{
        constructor(id,position,color,isAlive)
        {
            super(id,position,"Rook",color,"5",isAlive);
        }
        movement(n){
                return "Rook moves " + n +" step";
            }
   }
// Knight Class
   class Knight extends Pieces{
        constructor(id,position,color,isAlive)
        {
            super(id,position,"Knight",color,"3",isAlive);
        }
        movement(){
                return "Knight moves 2-1/2 step";
            }
   }
// Pawn Class
  class Pawn extends Pieces
  {
        constructor(id,position,color,isAlive){
            super(id,position,"Pawn",color,"1",isAlive);
        }
        movement(){
                return "Pawn moves 1 step";
            }
  }

  const pieceName = {
      king : "king",
      queen : "queen",
      bishop : "bishop",
      rook : "rook",
      knight : "knight",
      pawn : "pawn",
  }
  Object.freeze(pieceName);

  const pieceColor = {
      black : "black",
      white : "white",
  }
  Object.freeze(pieceColor);

  const pieceImage = {
    king : "king.svg",
    queen : "queen.svg",
    bishop : "bishop.svg",
    rook : "rook.svg",
    knight : "knight.svg",
    pawn : "pawn.svg",
  }
  Object.freeze(pieceImage);


  rook = [];
  bishop = [];
  knight = [];
  pawn = [];

// Object of King Class
  let k1 = new King("k1","1*4",pieceColor.black,"yes");
  let k2 = new King("k2","8*5",pieceColor.white,"yes");

// Object of Queen Class
  let q1 = new Queen("q1","1*5",pieceColor.black,"yes");
  let q2 = new Queen("q2","8*4",pieceColor.white,"yes");
  
function insertImage( pName, color) {
    const sourceId = "./pieces/";
    return sourceId + pieceColor[color] + pieceImage[pName];
}
  
function chessDisplay() {
    var table = document.getElementById("chessboard");
   
    for (var i = 1; i < 9; i++) {
        var rows = table.insertRow();
        for (let j = 1; j < 9; j++) {
            var cell = rows.insertCell();
            var img = document.createElement('img');
            img.style.height = '70px';
            if ((i + j) % 2)
                cell.style.backgroundColor = '#3B240B';
            else
                cell.style.backgroundColor = '#FBF5EF';
            if(i == 2 || i == 7) {
                if(i%2==0){
                    var imageTemp = insertImage(pieceName.pawn,pieceColor.black); 
                    const pIdBlack = j + 'pb';
                    const position = i + ' * ' + j;
                    pawn.push(new Pawn(pIdBlack,position,pieceColor.black,"yes")); // Object of Class Black Pawn
                }
                else{
                    var imageTemp = insertImage(pieceName.pawn,pieceColor.white);
                    const pIdWhite = j + 'pw';
                    const position = i + ' * ' + j;
                    pawn.push(new Pawn(pIdWhite,position,pieceColor.white,"yes")); // Object of Class White Pawn
                }
                img.src = imageTemp;
                cell.appendChild(img);
            }
            else if(i == 1 || i ==8) {
                if( j==1 || j==8){
                    if(i<2){
                        var imageTemp = insertImage(pieceName.rook,pieceColor.black);
                        const rIdBlack = j + 'rb';
                        const position = i + ' * ' + j;
                        rook.push(new Rook(rIdBlack,position,pieceColor.black,"yes")); // Object of Class Black Rook
                    }
                    else{
                        var imageTemp = insertImage(pieceName.rook,pieceColor.white);
                        const rIdWhite = j + 'rw';
                        const position = i + ' * ' + j;
                        rook.push(new Rook(rIdWhite,position,pieceColor.white,"yes")); // Object of class White Rook
                    }
                }
                else if( j == 2 || j == 7 ){
                    if(i<j){
                        var imageTemp = insertImage(pieceName.knight,pieceColor.black);
                        const kIdBlack = j + 'kb';
                        const position = i + ' * ' + j;
                        knight.push(new Knight(kIdBlack,position,pieceColor.black,"yes")); // Object of Class Black Knight
                    }
                    else{
                        var imageTemp = insertImage(pieceName.knight,pieceColor.white);
                        const kIdWhite = j + 'kw';
                        const position = i + ' * ' + j;
                        knight.push(new Knight(kIdWhite,position,pieceColor.white,"yes")); // Object of Class White Knight
                    }
                }
                else if( j == 3 || j == 6 ){
                    if(i<j){
                        var imageTemp = insertImage(pieceName.bishop,pieceColor.black);
                        const bIdBlack = j + 'bb';
                        const position = i + ' * ' + j;
                        bishop.push(new Bishop(bIdBlack,position,pieceColor.black,"yes")); // Object of Class Black Bishop
                    }
                    else{
                        var imageTemp = insertImage(pieceName.bishop,pieceColor.white);
                        const bIdWhite = j + 'bb';
                        const position = i + ' * ' + j;
                        bishop.push(new Bishop(bIdWhite,position,pieceColor.white,"yes")); // Object of Class White Bishop
                    } 
                }
                else if( j == 4 || j == 5 ){
                    if((i+j)%2==0){
                        if(i<j)
                            var imageTemp = insertImage(pieceName.king,pieceColor.black);
                        else
                            var imageTemp = insertImage(pieceName.king,pieceColor.white);
                    }
                    else{
                        if(i<j)
                            var imageTemp = insertImage(pieceName.queen,pieceColor.black);
                        else
                            var imageTemp = insertImage(pieceName.queen,pieceColor.white);
                    }
                }
                img.src = imageTemp;
                cell.appendChild(img);
            }   
        }
        
    }
    console.dir(pawn);
    console.dir(bishop);
    console.dir(knight);
}





