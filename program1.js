// const walls = 5;
// const painters = 3;
// let wallPaintTime = [05, 10, 30, 20, 15]


const walls = 4;
const painters = 2;
let wallPaintTime = [10,20,30,40]


wallPaintTime=wallPaintTime.sort(function (a, b) {
  return b - a;
});
console.log(wallPaintTime);
let assinedTime = [];
wallPaintTime.forEach((time, i) => {
  if (i < painters) {
      assinedTime[i]=[time];
  } else {
    const sumOfArray = assinedTime.map((y) => y.reduce((a, b) => a + b));
    const minimum = Math.min(...sumOfArray);
    const minIndex = sumOfArray.indexOf(minimum);    
    assinedTime[minIndex].push(time);
  }
});
console.log(assinedTime);
const sumOfArray = assinedTime.map((y) => y.reduce((a, b) => a + b));
console.log(sumOfArray)
const maximumTime = Math.max(...sumOfArray);
console.log("maximumTime time will be",maximumTime)
