module.exports = function reverse (n) {
    const str = n.toString();
    let reverseStr = '';
    let i = 0;
    if(str[i] === '-'){
        i++;
    }

    while(i < str.length){
        reverseStr = str[i] + reverseStr;
        i++;
    }

    return +reverseStr;
}
