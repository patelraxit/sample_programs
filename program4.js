
Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};

function reverseString(str){
    const strArray=str.split('')
     let revStr=""
     for (let i = str.length-1; i >=0 ; i--) {
        revStr+=strArray[i];
    }
    return revStr
}

function isPalindrome (str){
    const revStr=reverseString(str)
    console.log(str,revStr)
    return str == revStr
}

function makePalindrome(str){
    i=0
    while(!isPalindrome(str)){
       let strArray=str.split('')
     let start =0
     let end = strArray.length
       while (start < end) {
      if(strArray[start]!==strArray[end]){
          strArray.insert(start, strArray[end]);
          str=strArray[end].join('')
          i++
          break;
      }
      start++;
      end--;
    }

    }
    return i
}

console.log(makePalindrome("ma1dam"))
