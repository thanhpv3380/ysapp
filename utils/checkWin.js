// check row
module.exports.checkWinRow = (squares, pos, player) =>{
    //console.log(player);
    let j = pos - 1;
    let row = 1;
    let limitRow = Math.floor(pos / 20);
    //console.log(limitRow);
    while (squares[j] === player && j >= limitRow*20){
        //console.log('i++');
        j--;
        row++; 
    }
    //let rowX = j;
    j = pos + 1;
    while (squares[j] === player && j < limitRow*20+20 ){
        j++;
        row++;
    }
    //console.log(row);
    let res = {};
    //let rowY = j;
    if (row === 5){
        res = {
            success: true
            // start: rowX,
            // end: rowY
        }
    } else {
        res = {
            success: false
        }
    }
    return res;
}
// check column
module.exports.checkWinCol = (squares, pos, player) =>{
    //console.log(player);

    let numBox = 20; // number of box

    let j = pos - numBox;
    let row = 1;

    while (squares[j] === player && j >= 0){
        j -= numBox;
        row++; 
    }
    //let rowX = j;
    j = pos + numBox;
    while (squares[j] === player && j < 320 ){
        j += numBox;
        row++;
    }
    //console.log(row);
    let res = {};
    //let rowY = j;
    if (row === 5){
        res = {
            success: true
            // start: rowX,
            // end: rowY
        }
    } else {
        res = {
            success: false
        }
    }
    return res;
}
module.exports.checkWinDiagonalRight = (squares, pos, player) =>{
    let numBox = 20; // number of box
    let row = 1;

    let j = pos - numBox - 1;
    let limitRow = pos - 20*Math.floor(pos / 20);
    let limitJ = j - 20*Math.floor(j / 20);
    while (squares[j] === player &&  limitRow > limitJ && j >= 0){
        j -= numBox - 1;
        row++; 
        limitJ = j - 20*Math.floor(j / 20);
    }

    //let rowX = j;
    j = pos + numBox + 1;
    limitJ = j - 20*Math.floor(j / 20);
    while (squares[j] === player && limitRow < limitJ  && j < 320){
        j += numBox + 1;
        row++;
        limitJ = j - 20*Math.floor(j / 20);
    }
    //console.log(row);
    let res = {};
    //let rowY = j;
    if (row === 5){
        res = {
            success: true
            // start: rowX,
            // end: rowY
        }
    } else {
        res = {
            success: false
        }
    }
    return res;
}
module.exports.checkWinDiagonalLeft = (squares, pos, player) =>{
    //console.log(player);

    let numBox = 20; // number of box
    let row = 1;

    let j = pos - numBox + 1;
    let limitRow = pos - 20*Math.floor(pos / 20);
    let limitJ = j - 20*Math.floor(j / 20);
    while (squares[j] === player &&  limitRow < limitJ && j >= 0){
        j -= numBox + 1;
        row++; 
        limitJ = j - 20*Math.floor(j / 20);
    }

    //let rowX = j;
    j = pos + numBox - 1;
    limitJ = j - 20*Math.floor(j / 20);
    while (squares[j] === player && limitRow > limitJ  && j < 320){
        j += numBox - 1;
        row++;
        limitJ = j - 20*Math.floor(j / 20);
    }
    //console.log(row);
    let res = {};
    //let rowY = j;
    if (row === 5){
        res = {
            success: true
            // start: rowX,
            // end: rowY
        }
    } else {
        res = {
            success: false
        }
    }
    return res;
}