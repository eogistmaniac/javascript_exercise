const sumAll = function(num1,num2) {
    var sum =0;
    if(num1<0 || num2<0 || typeof(num1) != "number" || typeof(num2)!= "number"){
        return "ERROR";
    }
    else
    {
        if(num1<num2 && num1>0){
            for(var i = num1;i<=num2;i++){
                sum = sum + i;
            }
        }
        if(num2<num1 && num2>0){
            for(var i = num2;i<=num1;i++){
                sum = sum + i;
            }
        }
        return sum;
    }
    
    
}

module.exports = sumAll
