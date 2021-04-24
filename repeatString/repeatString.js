const repeatString = function(word,count) {
    if(count<0){
        return('ERROR');
    }
    else{
        var a ='';
        for(var i =0;i<count;i++){
            a = a + word;
        }
    }
    return a;
}
module.exports = repeatString
