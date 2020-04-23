//first return same output if the selected cell is already the color selected.
//then determine what cells are black and which ones are white. This is to save processing later so there is a smaller amount of cells to test. **DETERMINED THIS WASN'T NECESSARY IF I DID IT LIKE A QUEUE THAT POPPED OFF EACH TEST**
//then starting on selected cell, turn to the correct color; loop through adjacent cells and do the same. When there are no more adjacent cells of the opposite color, it's complete.
//black is represented by 1, and white is represented by 0
//[[0, 1, 0],
//[0, 0, 1],
//[0, 1, 1]]

export const paintBucket = (canvasArray, color, coordinates) => {
    let cellx = coordinates[0], celly = coordinates[1];
    if(canvasArray[cellx][celly] === color) return canvasArray;
    
    let list = [coordinates];
    let counter = 0;
    while(list.length > 0){
        let row = list[counter][0];
        let col = list[counter][1];
        if(canvasArray[row][col] !== color){
            canvasArray[row][col] = color;
            if(row > 0) list.push([row-1,col]); //above cell
            if(row < canvasArray.length-1) list.push([row+1, col]) //bottom cell
            if(col > 0) list.push([row, col-1]); //left cell
            if(col < canvasArray[row].length-1) list.push([row,col+1]); //right cell
        }
        list.splice(0,1);
    }
    return canvasArray;
}

//paintBucket([[0, 1, 0],[0, 0, 1],[0, 1, 1]],1,[0,0]);