const reverseString = function(word) {
    var b =[]
    for(var i = word.length-1;i>=0;i--){
        b.push(word[i])
    }
    var x = b.join("");
    return x;
}

module.exports = reverseString
