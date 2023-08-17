function isHappyNumber(number){
    let sum  = number
    while (sum>=7)
    {
        const digitList=[]
        let tmp=sum    
        while(tmp>=1){
            const digit = tmp%10;
            digitList.push(digit);
            tmp=Math.floor(tmp/10)
        }
        console.log(digitList)
        sum=digitList.length===1?digitList[0]*digitList[0]:digitList.reduce((a, b) => a*a + b*b);    
    }
    if(sum ===1){
        return true
    }else{
    return false}
}

const n = 10
for(let i=n+1;;i++){
    if(isHappyNumber(i)){
        console.log(i)
        break;
    }
}
