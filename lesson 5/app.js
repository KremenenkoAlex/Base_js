function chessboard() {
    let newTable = document.createElement( 'table' ),
        lets = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigs1 = [ '8','♜','♞','♝','♛','♚','♝','♞','♜','8' ],
        whiteFigs1 = [ '1','♖','♘','♗','♕','♔','♗','♘','♖','1' ],
        blackFigs2 = [ '7','♟','♟','♟','♟','♟','♟','♟','♟','7' ],
        whiteFigs2 = [ '2','♙','♙','♙','♙','♙','♙','♙','♙','2' ];
    for ( let i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        let newTr = newTable.insertRow(i);
        for ( let j = 0; j < 10; j++ ) {
            let newTd = newTr.insertCell( j );
                
            if (i % 2 == j % 2) {
                newTd.className = "white";
            } else {
                newTd.className = "black";
            }
            newTr.appendChild(newTd);
            switch (i) {
                case 0:
                    newTd.innerText = lets[ j ];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    newTd.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs1[ j ];
                    break;
                case 9:
                    newTd.innerText = lets[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
        newTable.appendChild(newTr);
    }
    document.body.appendChild(newTable);
};

chessboard();
