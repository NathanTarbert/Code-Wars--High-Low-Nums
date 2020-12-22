function highAndLow(hiLowNums){

    var arr = hiLowNums.split(" ");
    var max = arr.reduce((a, b) => {
        return Math.max(a, b);
    });
    var min = arr.reduce((a, b) => {
        return Math.min(a, b);
    });
    
    console.log(`${max} ${min}`);
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");