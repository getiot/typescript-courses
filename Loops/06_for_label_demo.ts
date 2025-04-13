function loopDemo(): void {
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        continue outer;
      }
      console.log(`i = ${i}, j = ${j}`);
    }
  }
}

loopDemo();