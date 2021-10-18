let n = 7;

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let i = 0; i <= midOfMatrix; i++) {
  for (let j = 0; j <= n; j++) {
    if (j > controlLeft && j < controlRight) {
      process.stdout.write('*');
    } else {
      process.stdout.write(' ');
    }
  }

  console.log('')
  controlRight++;
  controlLeft--;
}