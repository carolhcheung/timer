const input = process.argv.slice(2);
input.sort(function(a, b) {
  return a - b;
});
const timer = input.map(x => x * 1000);
  
for (let time of timer) {
  if (NaN) {
    continue;
  }
  if (time >= 1) {
    setTimeout(() => {
      process.stdout.write(`\x07 ${time} milliseconds \n`);
    }, time);
  }
};
//take in input process.argv.slice(2) from node 3*1000 = 3s make it a variable for delay

//use for loop to loop through the timeInput array
//creating a process.stdout.write('\x07'); beep every time reaches set time out

//TEST CODE
//node timer1.js -10 3 5 a 9