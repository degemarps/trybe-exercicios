let n = 5;

for (let i = 0; i < n; i++) {
  for (let j = n; j > 0; j--) {

    if (j > i+1) {
      process.stdout.write(' ');
    } else {
      process.stdout.write('*');
    }
  }

  console.log();
}