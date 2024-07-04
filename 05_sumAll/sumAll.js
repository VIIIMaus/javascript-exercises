const sumAll = function(numStart, numEnd) {
    let sum = 0;

    if(numStart > numEnd){
        let aux = numEnd;
        numEnd = numStart;
        numStart = aux;
    }

    if(!(numStart < 0 || numEnd < 0) &&
        (typeof numStart === "number" && typeof numEnd === "number")){
        for(let i = numStart; i <= numEnd; i++){
            sum += i;
        }
    
        return sum;   
    }

    else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
